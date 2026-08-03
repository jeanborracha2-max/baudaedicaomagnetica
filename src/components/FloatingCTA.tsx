import React, { useState, useEffect } from 'react';
import { Lock, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface FloatingCTAProps {
  onOpenCheckout: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenCheckout }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-lg border-t border-yellow-500/40 py-3 px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Info */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-400 shrink-0">
            <Zap className="w-5 h-5 fill-yellow-400" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              BAÚ DA EDIÇÃO MAGNÉTICA 8K
            </div>
            <div className="text-[11px] text-yellow-400 font-mono font-bold">
              12x de R$ 9,74 (ou R$ 97 à vista) • 90% OFF
            </div>
          </div>
        </div>

        {/* Center Urgency Badge */}
        <div className="hidden md:inline-flex items-center gap-1.5 bg-red-950/80 border border-red-500/40 text-red-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>VAGAS LIMITADAS</span>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={onOpenCheckout}
          className="w-full sm:w-auto bg-gold-glow hover:bg-yellow-400 text-neutral-950 font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
        >
          <Lock className="w-4 h-4 fill-black" />
          <span>GARANTIR MEU ACESSO AGORA</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
