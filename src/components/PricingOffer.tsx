import React, { useState, useEffect } from 'react';
import { PRICING_TIERS } from '../data/packData';
import { ShieldCheck, Zap, Lock, Sparkles, CheckCircle2, Clock, CreditCard, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PricingOfferProps {
  onOpenCheckout: () => void;
}

export const PricingOffer: React.FC<PricingOfferProps> = ({ onOpenCheckout }) => {
  const [spotsLeft, setSpotsLeft] = useState(14);
  const tier = PRICING_TIERS[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => (prev > 4 ? prev - 1 : 4));
    }, 28000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckoutClick = () => {
    // Trigger celebratory confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    onOpenCheckout();
  };

  return (
    <section id="oferta" className="py-16 md:py-24 bg-black relative">
      {/* Glow aura background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 via-amber-500/30 to-yellow-500/20 border border-yellow-500/50 px-4 py-1.5 rounded-full text-xs font-bold text-yellow-300 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>OFERTA DE LANÇAMENTO EXCLUSIVA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            DESTRAVE O <span className="text-gold-gradient">BAÚ DA EDIÇÃO MAGNÉTICA</span> HOJE
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Selecione o plano vitalício abaixo e garanta o maior acervo de recursos do Brasil pelo menor preço da história.
          </p>
        </div>

        {/* Urgency Spots Banner */}
        <div className="bg-amber-950/80 border border-amber-500/50 rounded-2xl p-3 text-center mb-8 flex items-center justify-center gap-3 text-xs sm:text-sm text-amber-200 font-medium">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span>
            ATENÇÃO: Restam apenas <strong className="text-yellow-300 font-mono text-base font-bold underline">{spotsLeft} vagas</strong> com valor promocional e bônus inclusos.
          </span>
        </div>

        {/* Main Pricing Offer Card */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 border-2 border-yellow-500/60 shadow-[0_0_50px_rgba(234,179,8,0.2)] relative overflow-hidden">
          
          {/* Top Popular Tag */}
          <div className="absolute top-0 right-0 bg-gold-glow px-6 py-2 rounded-bl-2xl text-xs font-black text-black uppercase tracking-widest shadow-lg">
            🔥 MAIS VENDIDO • VITALÍCIO
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
                {tier.name}
              </h3>
              <p className="text-xs sm:text-sm text-yellow-400 font-medium mt-1">
                {tier.tagline}
              </p>
            </div>

            {/* Price Box Anchor */}
            <div className="bg-neutral-950/90 border border-yellow-500/30 rounded-2xl p-6 text-center space-y-2">
              <div className="text-xs text-neutral-400 uppercase font-mono tracking-widest">
                DE <span className="line-through text-red-400 font-bold">R$ {tier.originalPrice},00</span> POR APENAS
              </div>

              <div className="flex items-baseline justify-center gap-1">
                <span className="text-lg font-bold text-yellow-400">12x de</span>
                <span className="text-4xl sm:text-6xl font-black text-white font-mono tracking-tight text-gold-gradient">
                  R$ {tier.installments.value.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <div className="text-xs text-neutral-300 font-medium">
                OU APENAS <strong className="text-yellow-300 font-bold">R$ {tier.price},00 À VISTA</strong> NO PIX
              </div>

              <div className="text-[11px] text-emerald-400 font-bold uppercase bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full inline-block mt-1">
                💰 ECONOMIA REAL DE R$ 900,00 (90% OFF)
              </div>
            </div>

            {/* Included Features List */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest">
                O QUE ESTÁ INCLUÍDO NO SEU ACESSO HOJE:
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-neutral-200">
                {tier.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Big Action Button */}
            <div className="pt-4 space-y-3">
              <button
                onClick={handleCheckoutClick}
                className="w-full bg-gold-glow hover:bg-yellow-400 text-neutral-950 font-black text-lg sm:text-2xl py-5 rounded-2xl shadow-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer uppercase tracking-wider animate-pulse-glow"
              >
                <Lock className="w-6 h-6 fill-black" />
                <span>GARANTIR MINHA VAGA AGORA</span>
                <ArrowRight className="w-6 h-6" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-neutral-400 font-medium pt-2">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-yellow-400" /> Checkout 100% Seguro</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-yellow-400" /> Liberação Imediata</span>
                <span>•</span>
                <span className="flex items-center gap-1"><CreditCard className="w-3.5 h-3.5 text-yellow-400" /> PIX ou Cartão em 12x</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
