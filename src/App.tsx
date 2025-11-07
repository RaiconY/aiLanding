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
import ChatWidget from './components/ChatWidget';

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
      <section className="bg-slate-950 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center text-white">
          <h2 className="text-3xl font-semibold sm:text-4xl">Попробуйте ChatKit в действии</h2>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">
            Откройте виджет и пообщайтесь с нашим рабочим процессом, чтобы увидеть, как ChatKit помогает
            пользователям получать ответы в реальном времени.
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
            <ChatWidget />
          </div>
        </div>
      </section>
      {/*<UnifiedAuthors />
      <WhyAuthorCreated />
      <Consultations />
      */}
      <Footer />
    </div>
  );
}

export default App;

