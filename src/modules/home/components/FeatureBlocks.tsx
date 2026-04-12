import React from 'react';
import { 
  ArrowRight, 
  BarChart2, 
  ShoppingCart, 
  Percent, 
  Settings, 
  TrendingUp, 
  Headphones,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function FeatureBlocks() {
  return (
    <>
      {/* Feature Grid Section */}
      <section className="py-24 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#49724B]"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#49724B]">CAPABILITIES</span>
              <div className="w-8 h-[2px] bg-[#49724B]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#020C04] mb-6">
              Our <span className="text-[#49724B]">Features</span>
            </h2>
            <p className="text-lg text-[#132A1A]/70">
              Everything you need to build and scale your business online.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart2, title: "Grow revenue faster", desc: "Powerful built-in tools accelerate your ecommerce growth and maximize your ROI." },
              { icon: ShoppingCart, title: "Convert more shoppers", desc: "An industry-leading checkout turns website visitors into loyal customers." },
              { icon: Percent, title: "Save on rates", desc: "Preferred payment providers offer competitive rates — and no additional hidden fees." },
              { icon: Settings, title: "Build your way", desc: "Platform flexibility means you have the absolute freedom to customize everything." },
              { icon: TrendingUp, title: "Boost B2B sales", desc: "Robust B2B features ensure you can scale online sales for wholesale and enterprise." },
              { icon: Headphones, title: "Access reliable support", desc: "24x7 live, US-based support solves any ecommerce challenge you might face." }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-xl border border-[#D5DFCF]/40 shadow-sm hover:shadow-md hover:border-[#A3BA9C] transition-all duration-300 flex flex-col items-start">
                <div className="w-12 h-12 rounded-lg bg-[#F8FAF8] border border-[#D5DFCF]/60 flex items-center justify-center mb-5 text-[#49724B] group-hover:scale-110 group-hover:bg-[#49724B] group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#020C04]">{feature.title}</h3>
                <p className="text-[#132A1A]/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Feature 1: Design */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#D5DFCF]/20 rounded-3xl p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-[#49724B]"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#49724B]">DESIGN</span>
                <div className="w-8 h-[2px] bg-[#49724B]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#020C04]">Store <span className="text-[#49724B]">Builder</span></h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Drag-and-drop Page Builder",
                  "Customizable themes",
                  "Built-in mobile responsiveness",
                  "Seamless API connection"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#132A1A]/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#A3BA9C] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 text-[#132A1A] font-bold hover:text-[#74966F] transition-colors">
                LEARN MORE <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/design/800/600" 
                alt="Design Builder" 
                className="rounded-xl shadow-xl border border-white/20 relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#A3BA9C]/20 rounded-full blur-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Feature 2: Checkout */}
      <section className="py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F8FAF8] rounded-3xl p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-full min-h-[300px]">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D5DFCF]/50 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-12 h-12 rounded-full bg-[#F8FAF8] flex items-center justify-center mb-3">
                     <Zap className="w-6 h-6 text-[#49724B]" />
                   </div>
                   <div className="text-xl font-bold text-[#020C04] mb-1">1-Click</div>
                   <div className="text-xs font-bold text-[#132A1A]/60 uppercase tracking-wider">Fast Checkout</div>
                </div>
                <div className="bg-[#49724B] rounded-2xl p-6 shadow-md flex flex-col justify-between text-white hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-black mb-1">+28%</div>
                    <div className="text-sm text-white/80 font-bold uppercase tracking-wider">Conversion</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D5DFCF]/50 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#F8FAF8] flex items-center justify-center mb-4">
                    <CreditCard className="w-5 h-5 text-[#49724B]" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#020C04] mb-1">100+</div>
                    <div className="text-sm text-[#132A1A]/60 font-bold uppercase tracking-wider">Payment Options</div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D5DFCF]/50 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300">
                   <div className="w-12 h-12 rounded-full bg-[#F8FAF8] flex items-center justify-center mb-3">
                     <ShieldCheck className="w-6 h-6 text-[#49724B]" />
                   </div>
                   <div className="text-xl font-bold text-[#020C04] mb-1">Secure</div>
                   <div className="text-xs font-bold text-[#132A1A]/60 uppercase tracking-wider">Fraud Protection</div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#D5DFCF]/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-[#49724B]"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#49724B]">CHECKOUT</span>
                <div className="w-8 h-[2px] bg-[#49724B]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#020C04]">Optimized <span className="text-[#49724B]">Conversion</span></h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Optimized one-page checkout designed to convert shoppers",
                  "Choose your preferred payment partner to get the best possible rate",
                  "Digital wallets and buy now, pay later solutions",
                  "Passwordless one-click checkout options"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#132A1A]/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#A3BA9C] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 text-[#132A1A] font-bold hover:text-[#74966F] transition-colors">
                LEARN MORE <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#D5DFCF]/10 rounded-3xl p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-[#49724B]"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#49724B]">GROWTH</span>
                <div className="w-8 h-[2px] bg-[#49724B]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#020C04]">Marketing <span className="text-[#49724B]">Tools</span></h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Sell on social media channels, like Meta and TikTok",
                  "Advertise on platforms like Google Shopping",
                  "Place products on marketplaces, like Amazon and Walmart",
                  "Maximize site traffic with powerful SEO tools"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#132A1A]/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#A3BA9C] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 text-[#132A1A] font-bold hover:text-[#74966F] transition-colors">
                LEARN MORE <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D5DFCF]/50 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-[#F8FAF8] flex items-center justify-center mb-4">
                  <BarChart2 className="w-5 h-5 text-[#49724B]" />
                </div>
                <div>
                  <div className="text-3xl font-black text-[#020C04] mb-1">+45%</div>
                  <div className="text-sm text-[#132A1A]/60 font-bold uppercase tracking-wider">Traffic</div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D5DFCF]/50 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300">
                 <div className="text-2xl font-bold text-[#020C04] mb-2">Google</div>
                 <div className="text-xs font-bold text-[#49724B] bg-[#49724B]/10 px-3 py-1.5 rounded-full uppercase tracking-wider">Shopping Ads</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D5DFCF]/50 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300">
                 <div className="text-2xl font-bold text-[#020C04] mb-2">Meta</div>
                 <div className="text-xs font-bold text-[#49724B] bg-[#49724B]/10 px-3 py-1.5 rounded-full uppercase tracking-wider">Social Commerce</div>
              </div>
              <div className="bg-[#49724B] rounded-2xl p-6 shadow-md flex flex-col justify-between text-white hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-black mb-1">3x</div>
                  <div className="text-sm text-white/80 font-bold uppercase tracking-wider">Conversion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}