import React from 'react';
import Hero from './components/Hero';
import NewTestimonials from './components/NewTestimonials';
import ValueProposition from './components/ValueProposition';
import ForWho from './components/ForWho';
import GuideContent from './components/GuideContent';
import TimeComparison from './components/TimeComparison';
import WhyChatGPT from './components/WhyChatGPT';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FullWidthImage from './components/FullWidthImage';
import ChatKitWidget from './components/ChatKitWidget';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <FullWidthImage imageUrl="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/Screens_with_circle%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvU2NyZWVuc193aXRoX2NpcmNsZSAoMSkucG5nIiwiaWF0IjoxNzQ2OTA0MzUwLCJleHAiOjE3Nzg0NDAzNTB9.fTllEdp66BfVieoSTuX2RpUKJJWI04_ar-xXQdroVhQ" /> */}
      <ValueProposition />
      <ForWho />
      <FullWidthImage imageUrl="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Screens with rabbit lamp.png" />
      <GuideContent />
      <FullWidthImage imageUrl="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Screens with chapters.png" />
      <TimeComparison />
      <WhyChatGPT />
      <FullWidthImage imageUrl="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Screens with rabbit Robot.png" />
      {/*<TestimonialsScreenshots />*/}
      <NewTestimonials />
      <Pricing />
      <FAQ />
      <ChatKitWidget />
      {/*<UnifiedAuthors />
      <WhyAuthorCreated />
      <Consultations />
      */}
      <Footer />
    </div>
  );
}

export default App;

