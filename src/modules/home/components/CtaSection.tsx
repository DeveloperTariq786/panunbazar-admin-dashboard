import React from 'react';
import { ArrowRight, CheckCircle2, Settings } from 'lucide-react';

export default function CtaSection() {
  return (
    <>
      {/* Large CTA Banner */}
      <section className="w-full bg-[#49724B] py-16 px-6 text-center relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#A3BA9C] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#132A1A] rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Take control of your success with EcoCommerce
          </h2>
          <p className="text-lg text-white/90 mb-8">
            No business is too complex, simple, big, or small to thrive with EcoCommerce. Say goodbye to stores that all look the same, and say hello to growth.
          </p>
          <button className="px-8 py-4 bg-white text-[#132A1A] font-bold rounded-full hover:bg-[#D5DFCF] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Get started with EcoCommerce
          </button>
        </div>
      </section>

      {/* Coach CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#49724B]/5 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-[#49724B]/5 overflow-hidden flex flex-col md:flex-row items-center border border-[#D5DFCF]/50 relative">
            {/* Decorative background element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D5DFCF]/30 rounded-full blur-3xl"></div>
            
            <div className="md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-[#49724B]"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#49724B]">SUPPORT</span>
                <div className="w-8 h-[2px] bg-[#49724B]"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#020C04] mb-6 leading-tight">
                Expert <span className="text-[#49724B]">Coaching</span>
              </h2>
              <p className="text-[#132A1A]/70 mb-8 text-lg leading-relaxed">
                Get personalized, 1-on-1 guidance from ecommerce experts to help you set up, launch, and scale your store faster than ever.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Personalized growth strategy",
                  "Store setup & optimization",
                  "Marketing & conversion tips"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#132A1A]/80 font-medium">
                    <div className="w-6 h-6 rounded-full bg-[#D5DFCF]/50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#49724B]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#49724B] text-white font-bold rounded-full hover:bg-[#2B4E31] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Book a Session
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-[#D5DFCF] text-[#132A1A] font-bold rounded-full hover:border-[#49724B] hover:text-[#49724B] transition-all duration-300 flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 h-full min-h-[400px] md:min-h-[600px] relative p-6 md:p-10">
              <div className="absolute inset-0 bg-[#A3BA9C]/20 rounded-[2rem] transform translate-x-4 translate-y-4 m-6 md:m-10"></div>
              <img 
                src="https://picsum.photos/seed/coach/800/800" 
                alt="Coaching Session" 
                className="w-full h-full object-cover rounded-[2rem] shadow-lg relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Logo Strip */}
      <section className="py-16 bg-white border-t border-[#D5DFCF]/40">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold tracking-[0.1em] text-[#74966F] mb-8 uppercase">
            Seamlessly integrates with your favorite tools
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {/* Klaviyo */}
            <div className="text-2xl md:text-3xl font-serif font-bold text-[#132A1A]/40 hover:text-[#49724B] transition-colors tracking-tighter flex items-start cursor-default">
              klaviyo<span className="text-[10px] ml-0.5 mt-1">■</span>
            </div>
            {/* QuickBooks */}
            <div className="flex items-center gap-2 text-[#132A1A]/40 hover:text-[#49724B] transition-colors cursor-default">
               <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-[10px] font-black">qb</div>
               <div className="font-bold leading-none tracking-tight">
                 <div className="text-[10px] uppercase tracking-widest">Intuit</div>
                 <div className="text-lg">quickbooks</div>
               </div>
            </div>
            {/* ShipStation */}
            <div className="flex items-center gap-1.5 text-[#132A1A]/40 hover:text-[#49724B] transition-colors cursor-default">
               <Settings className="w-7 h-7" />
               <span className="text-xl md:text-2xl font-bold tracking-tight">ShipStation</span>
            </div>
            {/* Google */}
            <div className="text-2xl md:text-3xl font-bold text-[#132A1A]/40 hover:text-[#49724B] transition-colors tracking-tighter cursor-default">
              Google
            </div>
            {/* Amazon */}
            <div className="text-2xl md:text-3xl font-bold text-[#132A1A]/40 hover:text-[#49724B] transition-colors tracking-tighter flex flex-col items-center cursor-default">
              amazon
              <div className="w-full h-1 bg-current rounded-full mt-0.5 opacity-80" style={{borderRadius: '50% 50% 0 0 / 100% 100% 0 0'}}></div>
            </div>
            {/* eBay */}
            <div className="text-2xl md:text-3xl font-bold text-[#132A1A]/40 hover:text-[#49724B] transition-colors tracking-tighter cursor-default">
              ebay
            </div>
          </div>
        </div>
      </section>
    </>
  );
}