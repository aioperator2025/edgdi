import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import FaqSection from '../components/FaqSection';
import NewsletterSection from '../components/NewsletterSection';
import VideoHighlightSection from '../components/VideoHighlightSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <VideoHighlightSection />
        <ServicesSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
