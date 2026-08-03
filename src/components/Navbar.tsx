import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, Lock, Sparkles, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <>
      {/* Top Notification Urgency Banner */}
      <div className="bg-gradient-to-r from-accent-950 via-accent-900 to-accent-950 border-b border-accent-500/30 text-accent-100 text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 tracking-wide">
        <Sparkles className="w-4 h-4 text-accent-400 animate-pulse hidden sm:inline" />
        <span>
          OFERTA DE LANÇAMENTO: <strong className="text-accent-300 underline underline-offset-2">90% DE DESCONTO</strong> EXPIRA EM:
        </span>
        <div className="inline-flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded border border-accent-500/40 font-mono text-accent-400 font-bold">
          <Clock className="w-3.5 h-3.5 text-accent-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
        </div>
      </div>

      {/* Main Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md border-b border-accent-500/20 py-3 shadow-2xl' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 via-accent-500 to-accent-700 p-0.5 shadow-lg shadow-accent-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent-400 fill-accent-400/20" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-base sm:text-lg text-white font-mono uppercase leading-none">
                BAÚ DA EDIÇÃO
              </span>
              <span className="text-[10px] font-semibold text-accent-400 tracking-widest uppercase">
                MAGNÉTICA 8K
              </span>
            </div>
          </a>

          {/* Quick Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-neutral-400 font-medium">
            <a href="#vsl-video" className="hover:text-accent-400 transition-colors">Vídeo</a>
            <a href="#recursos" className="hover:text-accent-400 transition-colors">Recursos</a>
            <a href="#bonuses" className="hover:text-accent-400 transition-colors">Bônus</a>
            <a href="#depoimentos" className="hover:text-accent-400 transition-colors">Depoimentos</a>
            <a href="#garantia" className="hover:text-accent-400 transition-colors">Garantia</a>
            <a href="#faq" className="hover:text-accent-400 transition-colors">Dúvidas</a>
          </nav>

          {/* CTA Header Button */}
          <button
            onClick={onOpenCheckout}
            className="bg-accent-glow text-neutral-950 hover:text-black font-extrabold text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-xl transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-500/20 cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">GARANTIR ACESSO</span>
          </button>
        </div>
      </header>
    </>
  );
};
