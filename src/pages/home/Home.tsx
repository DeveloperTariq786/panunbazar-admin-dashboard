import React from 'react';
import HeroSection from '../../modules/home/components/HeroSection';
import FeatureBlocks from '../../modules/home/components/FeatureBlocks';
import StoreShowcase from '../../modules/home/components/StoreShowcase';
import CtaSection from '../../modules/home/components/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureBlocks />
      <StoreShowcase />
      <CtaSection />
    </>
  );
}