"""FastAPI service for issuing ChatKit client secrets.

The endpoint defined here is called by the front-end when the embedded
ChatKit widget boots. It exchanges the server-side OpenAI API key and
workflow identifier for a short-lived client secret that the browser can
use to communicate with OpenAI directly.
"""

from __future__ import annotations

import os
from typing import Any, Dict, Optional

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import OpenAI

app = FastAPI()
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))


class SessionRequest(BaseModel):
    """Payload accepted when requesting a new ChatKit session."""

    user: Optional[str] = None
    device_id: Optional[str] = None
    metadata: Optional[Dict[str, Any]] = None


@app.post("/api/chatkit/session")
async def create_chatkit_session(payload: SessionRequest) -> Dict[str, str]:
    """Create a ChatKit session and return its client secret.

    The workflow identifier is injected via the ``CHATKIT_WORKFLOW_ID``
    environment variable so that it never needs to be exposed to the
    browser. Optional ``user``/``device_id`` values can be forwarded as the
    session's user identifier, and ``metadata`` allows callers to attach
    additional context to the generated session.
    """

    workflow_id = os.environ.get("CHATKIT_WORKFLOW_ID")
    if not workflow_id:
        raise HTTPException(
            status_code=500,
            detail="CHATKIT_WORKFLOW_ID environment variable is not configured.",
        )

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise HTTPException(
            status_code=500,
            detail="OPENAI_API_KEY environment variable is not configured.",
        )

    # Ensure the OpenAI client has the latest API key in case the environment
    # is reloaded without restarting the process.
    if client.api_key != api_key:
        client.api_key = api_key

    metadata: Dict[str, Any] = {}
    if payload.metadata:
        metadata.update(payload.metadata)

    user_identifier = payload.user or payload.device_id

    try:
        session = client.chatkit.sessions.create(
            workflow={"id": workflow_id},
            user=user_identifier,
            metadata=metadata or None,
        )
    except Exception as exc:  # pragma: no cover - surface upstream error
        raise HTTPException(status_code=500, detail=str(exc)) from exc

    return {"client_secret": session.client_secret}


@app.get("/healthz")
async def healthcheck() -> Dict[str, str]:
    """Simple health-check endpoint for uptime monitoring."""

    return {"status": "ok"}
