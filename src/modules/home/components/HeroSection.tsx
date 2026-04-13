import React from 'react';
import { Button } from '../../../components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/ecommerce-hero/1920/1080" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#020C04]/30 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8FAF8] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-md">
          Build Your <span className="text-[#A3BA9C]">Dream Store</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-sm">
          The open-source commerce platform that gives you absolute control over your business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Replaced standard <button> with Radix <Button> */}
          <Button className="h-auto px-8 py-4 bg-[#49724B] text-white font-semibold rounded-full hover:bg-[#A3BA9C] hover:text-[#020C04] transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
            Start Building Free
          </Button>
          <Button variant="outline" className="h-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-lg border border-white/30">
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
}