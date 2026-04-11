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
  Search,
  Menu,
  CreditCard,
  ShieldCheck,
  Zap
} from 'lucide-react';

// Color Palette Constants based on the provided image
const COLORS = {
  sageHint: '#D5DFCF',
  sage: '#A3BA9C',
  moss: '#74966F',
  evergreen: '#132A1A',
  lightBg: '#F8FAF8', // A very light tint for backgrounds
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-[#132A1A] bg-[#F8FAF8]">
      {/* Navigation */}
      <div className="pt-6 px-4 md:px-8 absolute top-0 left-0 w-full z-50">
        <nav className="relative flex items-center justify-between px-6 md:px-8 py-3 max-w-6xl mx-auto bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          <div className="text-2xl font-bold tracking-tight z-10">
            <span className="text-[#020C04]">Eco</span><span className="text-[#49724B]">Commerce</span>
          </div>
          
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-medium text-[#74966F]">
            <a href="#" className="hover:text-[#2B4E31] transition-colors">Features</a>
            <a href="#" className="hover:text-[#2B4E31] transition-colors">Stories</a>
            <a href="#" className="hover:text-[#2B4E31] transition-colors">Partners</a>
            <a href="#" className="hover:text-[#2B4E31] transition-colors">Pricing</a>
            <a href="#" className="hover:text-[#2B4E31] transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center z-10">
            <button className="px-8 py-2.5 bg-[#49724B] text-white font-semibold rounded-full hover:bg-[#2B4E31] transition-colors shadow-md shadow-[#49724B]/20">
              Login
            </button>
          </div>
          
          <button className="md:hidden p-2 text-[#132A1A] z-10">
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
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

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-md">
            Build Your <span className="text-[#A3BA9C]">Dream Store</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-sm">
            The open-source commerce platform that gives you absolute control over your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-[#49724B] text-white font-semibold rounded-full hover:bg-[#A3BA9C] hover:text-[#020C04] transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1">
              Start Building Free
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 text-lg border border-white/30">
              View Demo
            </button>
          </div>
        </div>
      </section>

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

      {/* Store Showcase Section */}
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

      {/* Footer */}
      <footer className="bg-[#2B4E31] text-white/90 py-12 border-t border-[#49724B]/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-6">EcoCommerce</div>
            <p className="text-sm">The open-source commerce platform for everyone.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Showcase</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 EcoCommerce. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
