import React from 'react';
import Hero from './components/Hero';
import NewTestimonials from './components/NewTestimonials';
import TestimonialsScreenshots from './components/TestimonialsScreenshots';
import ValueProposition from './components/ValueProposition';
import Stats from './components/Stats';
import ForWho from './components/ForWho';
import GuideContent from './components/GuideContent';
import TimeComparison from './components/TimeComparison';
import WhyChatGPT from './components/WhyChatGPT';
import AIDisclosure from './components/AIDisclosure';
import WhyGuide from './components/WhyGuide';
import WhyAuthorCreated from './components/WhyAuthorCreated';
import UnifiedAuthors from './components/UnifiedAuthors';
import Consultations from './components/Consultations';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FullWidthImage from './components/FullWidthImage';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NewTestimonials />
      {/* <FullWidthImage imageUrl="https://egftuzzffkkyebeatghv.supabase.co/storage/v1/object/sign/images/Screens_with_circle%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2QwZWQyZjQyLWU3OGEtNDk0MS05ZjEwLWMwODMwYjU1ODQ0MCJ9.eyJ1cmwiOiJpbWFnZXMvU2NyZWVuc193aXRoX2NpcmNsZSAoMSkucG5nIiwiaWF0IjoxNzQ2OTA0MzUwLCJleHAiOjE3Nzg0NDAzNTB9.fTllEdp66BfVieoSTuX2RpUKJJWI04_ar-xXQdroVhQ" /> */}
      <ValueProposition />
      {/* <Stats />  */}
      <ForWho />
      <FullWidthImage imageUrl="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Screens with rabbit lamp.png" />
      <GuideContent />
      <FullWidthImage imageUrl="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Screens with chapters.png" />
      <TimeComparison />
      <WhyChatGPT />
      {/* <AIDisclosure />*/}
      <FullWidthImage imageUrl="https://raw.githubusercontent.com/RaiconY/aiLanding/main/src/images/Screens with rabbit Robot.png" />
      <TestimonialsScreenshots />
      <Pricing />
      <FAQ />
      <UnifiedAuthors />
      <WhyAuthorCreated />
      <Consultations />
      {/*
      <WhyGuide />
      */}
      <Footer />
    </div>
  );
}

export default App;

