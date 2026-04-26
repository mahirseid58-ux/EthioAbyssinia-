import { 
  ShoppingBag, 
  ShoppingCart, 
  Globe, 
  Search, 
  User, 
  Menu, 
  ChevronRight, 
  Star, 
  Zap, 
  ShieldCheck, 
  Truck,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative flex items-center gap-4 group cursor-pointer", className)} id="brand-logo">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 border-[0.5px] border-white/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
        <div className="absolute inset-0 border-[2px] border-brand/20 rounded-full"></div>
        <div className="relative flex items-center justify-center">
          <span className="text-[20px] font-bold font-serif text-white/90 leading-none tracking-tighter">E</span>
          <span className="text-[20px] font-bold font-serif absolute -top-0.5 -right-0.5 text-brand translate-x-1 translate-y-1">A</span>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl tracking-[-0.04em] font-light text-white leading-none">
          Ethio<span className="font-black">Abyssinia</span>
        </h1>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-white/40 italic">Heritage Systems</span>
        </div>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-6",
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-white/5"
      )}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <nav className="hidden lg:flex items-center gap-10" id="desktop-nav">
          {['Collection', 'Archive', 'Story', 'Heritage'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 hover:text-brand transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-white/40 hover:text-brand transition-colors" id="search-btn">
            <Search className="w-5 h-5" />
          </button>
          <button className="relative text-white/40 hover:text-brand transition-colors" id="cart-btn">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand text-black text-[9px] font-black rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="lg:hidden text-white/60" id="mobile-menu-btn">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden bg-bg-deep" id="hero-section">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-between px-12 pointer-events-none opacity-10">
        <div className="w-[1px] h-full bg-white/50" />
        <div className="w-[1px] h-full bg-white/50 hidden md:block" />
        <div className="w-[1px] h-full bg-white/50 hidden md:block" />
        <div className="w-[1px] h-full bg-white/50" />
      </div>

      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[25vw] font-black tracking-tighter leading-none">ABYSSINIA</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-[10px] tracking-[0.4em] font-bold text-white/30 uppercase italic">Cultural Identity System</span>
            <div className="h-[1px] w-12 bg-white/10"></div>
            <span className="text-[10px] tracking-[0.4em] font-bold text-brand uppercase">East Africa / Global</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.05em] leading-[0.85] text-white mb-12 uppercase">
            Legacy <br />
            <span className="text-brand">Unbound.</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-16 max-w-4xl mx-auto border-t border-white/10 pt-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-light italic text-white/80 font-serif mb-4 leading-tight italic">ኢትዮ-አቢሲኒያ</h2>
              <p className="text-sm text-white/40 leading-loose tracking-wide max-w-sm">
                Synthesizing the ancient script of the highlands with modern geometric precision. A tribute to the eternal spirit of Abyssinia.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="px-10 py-5 bg-white text-black font-black text-xs tracking-[0.3em] uppercase hover:bg-brand transition-all shadow-2xl shadow-white/5 group" id="shop-now-btn">
                Shop Identity
              </button>
              <button className="px-10 py-5 border border-white/20 text-white font-bold text-xs tracking-[0.3em] uppercase hover:border-white transition-all" id="explore-btn">
                The Archive
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom corner stats */}
      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-1">
        <p className="text-[10px] tracking-widest text-white/30 uppercase mb-2">Vertical Alignment</p>
        <p className="text-3xl font-light">09.02° N</p>
      </div>
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-1 text-right">
        <p className="text-[10px] tracking-widest text-white/30 uppercase mb-2">Horizontal Axis</p>
        <p className="text-3xl font-light">38.74° E</p>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Supply",
      subtitle: "NETWORK"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Encrypted Trust",
      subtitle: "SECURITY"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Relay",
      subtitle: "SPEED"
    }
  ];

  return (
    <section className="py-24 border-y border-white/10 bg-black/40" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-0 border-x border-white/10">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group p-12 border-l border-white/10 first:border-l-0 hover:bg-white/[0.02] transition-all flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 border border-white/10 text-brand rounded-full flex items-center justify-center mb-8 group-hover:border-brand/50 group-hover:scale-110 transition-all">
                {item.icon}
              </div>
              <span className="text-[10px] font-black tracking-[0.4em] text-brand uppercase mb-2">{item.subtitle}</span>
              <h3 className="text-2xl font-light text-white tracking-tight">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductSection = () => {
  return (
    <section className="py-32" id="collection">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12 border-b border-white/10 pb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.5em] font-black text-brand uppercase mb-4 block">Seasonal Edit</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-white leading-none">The Master <br /> <span className="text-white/40">Collection</span></h2>
          </div>
          <div className="flex flex-wrap gap-4">
             {['Core', 'Special', 'Archive'].map(tab => (
               <button key={tab} className="px-8 py-3 bg-white/5 border border-white/10 text-[10px] font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                 {tab}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              className="group relative"
            >
              <div className="aspect-[3/4] bg-white/5 border border-white/10 p-6 overflow-hidden flex flex-col">
                <div className="flex justify-between items-start mb-6">
                   <div className="px-3 py-1 border border-brand/50 text-brand text-[9px] font-black uppercase tracking-widest">Available</div>
                   <span className="text-[10px] font-mono text-white/30">ID: EA-00{item}</span>
                </div>
                
                <div className="flex-1 flex items-center justify-center relative">
                   <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl opacity-20 absolute scale-150" />
                   <img 
                    src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800`}
                    alt="Product"
                    className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-700 relative z-10 drop-shadow-2xl"
                  />
                </div>

                <div className="mt-8">
                  <h4 className="text-2xl font-light text-white tracking-tight mb-2 uppercase">Heritage Artifact 00{item}</h4>
                  <div className="flex justify-between items-end">
                    <p className="text-xl font-mono text-brand">$240.00</p>
                    <button className="px-6 py-2 border border-white/20 hover:bg-white hover:text-black text-[9px] font-black uppercase tracking-widest transition-all">
                       Acquire
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HeritageSection = () => {
  return (
    <section className="py-40 bg-black relative" id="heritage">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-0 border border-white/10">
          <div className="lg:col-span-5 p-12 lg:p-24 border-r border-white/10 flex flex-col justify-between min-h-[600px]">
             <div>
               <span className="text-[10px] tracking-[0.5em] font-black text-brand uppercase mb-6 block">Foundation</span>
               <h2 className="text-5xl lg:text-7xl font-serif italic text-white/90 leading-tight mb-8">ኢትዮጵያ</h2>
               <p className="text-sm text-white/40 leading-relaxed tracking-wider max-w-sm border-l border-brand/50 pl-6 italic">
                From the jagged peaks of Simien to the vibrant streets of Addis, our identity is forged in the fires of resilience and beauty.
               </p>
             </div>
             <div>
               <div className="flex gap-4 items-center">
                 <div className="w-12 h-[1px] bg-white/20"></div>
                 <span className="text-[9px] tracking-[0.3em] font-black text-white/30 uppercase italic">Established MMXIX</span>
               </div>
             </div>
          </div>
          
          <div className="lg:col-span-7 relative group overflow-hidden h-[600px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1523805081446-99b211f673f1?auto=format&fit=crop&q=80&w=1200" 
              alt="Heritage Landscape"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-12">
               <span className="text-white font-black text-[15vw] leading-none opacity-5 tracking-tighter">UNITY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-deep text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <Logo className="mb-8" />
            <p className="text-xs text-white/30 leading-loose tracking-[0.1em] uppercase">
              The premium cultural identity system. Rooted in the highlands, reaching the global zenith. Synthesizing ancient heritage with functional modernity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div>
              <h5 className="text-[10px] font-black tracking-[0.4em] text-brand uppercase mb-6">Explore</h5>
              <div className="flex flex-col gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
                <a href="#" className="hover:text-brand transition-colors">Archive</a>
                <a href="#" className="hover:text-brand transition-colors">Lab</a>
                <a href="#" className="hover:text-brand transition-colors">Policy</a>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-black tracking-[0.4em] text-brand uppercase mb-6">Connect</h5>
              <div className="flex flex-col gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
                <a href="#" className="hover:text-brand transition-colors">Instagram</a>
                <a href="#" className="hover:text-brand transition-colors">Journal</a>
                <a href="#" className="hover:text-brand transition-colors">Contact</a>
              </div>
            </div>
            <div className="hidden sm:block">
              <h5 className="text-[10px] font-black tracking-[0.4em] text-brand uppercase mb-6">Location</h5>
              <div className="flex flex-col gap-1 text-[11px] font-bold text-white/40 uppercase tracking-widest">
                <span>09.02° N</span>
                <span>38.74° E</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/5 pt-12">
          <div>
            <span className="text-8xl font-black opacity-5 leading-none mb-[-20px] inline-block tracking-tighter">ETHIO-SYNC</span>
          </div>
          <div className="flex flex-col items-end gap-4">
             <div className="flex gap-2">
                <div className="w-2 h-2 bg-[#166534]"></div>
                <div className="w-2 h-2 bg-[#EAB308]"></div>
                <div className="w-2 h-2 bg-[#DC2626]"></div>
             </div>
             <p className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">
               © 2026 Abyssinia Design Lab / Ver 1.0.4
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-bg-deep font-sans selection:bg-brand/30 text-text-light selection:text-white">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <ProductSection />
        <HeritageSection />
      </main>
      <Footer />
    </div>
  );
}

