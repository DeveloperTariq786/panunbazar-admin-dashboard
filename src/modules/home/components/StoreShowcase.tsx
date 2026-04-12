import React from 'react';

export default function StoreShowcase() {
  return (
    <section className="py-24 bg-[#F8FAF8] overflow-hidden border-t border-[#D5DFCF]/30">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#020C04] tracking-tight mb-4">
          Start selling with <span className="text-[#49724B]">EcoCommerce</span>
        </h2>
        <p className="text-xl md:text-2xl text-[#132A1A]/70 max-w-3xl mx-auto font-medium">
          with professionally designed templates
        </p>
      </div>
      
      <div className="flex flex-col gap-6 md:gap-8 w-full max-w-[100vw]">
        {/* Top Row (Scrolls Left to Right) */}
        <div className="flex overflow-hidden group">
          <div className="flex w-max animate-marquee-right group-hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              <div className="w-[200px] md:w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-fashion/400/500" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[300px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-furniture/600/400" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[200px] md:w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-beauty/400/500" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[300px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-tech/600/400" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>
            {/* Duplicated Set for seamless loop */}
            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              <div className="w-[200px] md:w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-fashion/400/500" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[300px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-furniture/600/400" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[200px] md:w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-beauty/400/500" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[300px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-tech/600/400" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row (Scrolls Right to Left) */}
        <div className="flex overflow-hidden group">
          <div className="flex w-max animate-marquee-left group-hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              <div className="w-[300px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-jewelry/600/400" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[200px] md:w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-plants/400/500" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[300px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-decor/600/400" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[200px] md:w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-apparel/400/500" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>
            {/* Duplicated Set */}
            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              <div className="w-[300px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-jewelry/600/400" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[200px] md:w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-plants/400/500" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[300px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-decor/600/400" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <div className="w-[200px] md:w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#D5DFCF]/50 flex-shrink-0 relative cursor-pointer">
                <img src="https://picsum.photos/seed/ecommerce-apparel/400/500" alt="Store Template" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}