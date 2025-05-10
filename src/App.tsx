import React from 'react';
import Hero from './components/Hero';
import StudyTime from './components/StudyTime';
import Stats from './components/Stats';
import ForWho from './components/ForWho';
import Benefits from './components/Benefits';
import GuideContent from './components/GuideContent';
import TimeComparison from './components/TimeComparison';
import WhyChatGPT from './components/WhyChatGPT';
import AIDisclosure from './components/AIDisclosure';
import WhyGuide from './components/WhyGuide';
import WhyAuthorCreated from './components/WhyAuthorCreated';
import AboutAuthor from './components/AboutAuthor';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StudyTime />
      {/* <Stats />  */}
      <ForWho />
      <Benefits />
      <GuideContent />
      <TimeComparison />
      <WhyChatGPT />
      <AIDisclosure />
      <Testimonials />
      <Pricing />
      <FAQ />
      <WhyGuide />
      <WhyAuthorCreated />
      <AboutAuthor />
      <Footer />
    </div>
  );
}

export default App;