import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';
import FaqSection from '../components/FaqSection';
import NewsletterSection from '../components/NewsletterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <FaqSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
