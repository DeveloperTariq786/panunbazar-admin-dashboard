import React from 'react';
import Header from '../../components/layout/Header'; 
import Footer from '../../components/layout/Footer';
import HeroSection from '../../modules/home/components/HeroSection';
import FeatureBlocks from '../../modules/home/components/FeatureBlocks';
import StoreShowcase from '../../modules/home/components/StoreShowcase';
import CtaSection from '../../modules/home/components/CtaSection';

export default function Home() {
  // Moved the global styling wrapper here from MainLayout
  return (
    <div className="min-h-screen font-sans theme-default">
      <Header />
      
      <main>
        <HeroSection />
        <FeatureBlocks />
        <StoreShowcase />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}