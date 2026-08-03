import React from 'react';
import { BONUSES_DATA } from '../data/packData';
import { Gift, Check, PlayCircle, FileText, Users, RefreshCw, Lock, ArrowRight } from 'lucide-react';

interface BonusesSectionProps {
  onOpenCheckout: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onOpenCheckout }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PlayCircle': return <PlayCircle className="w-6 h-6 text-yellow-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-yellow-400" />;
      case 'Users': return <Users className="w-6 h-6 text-yellow-400" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-yellow-400" />;
      default: return <Gift className="w-6 h-6 text-yellow-400" />;
    }
  };

  return (
    <section id="bonuses" className="py-16 md:py-24 bg-neutral-950 border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border border-yellow-500/50 px-4 py-1.5 rounded-full text-xs font-bold text-yellow-300 uppercase tracking-widest">
            <Gift className="w-4 h-4 text-yellow-400 animate-bounce" />
            <span>EXCLUSIVO PARA A TURMA DE HOJE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            RECEBA MAIS <span className="text-gold-gradient">R$ 1.138,00 EM BÔNUS</span> TOTALMENTE GRÁTIS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Garantindo seu acesso hoje, você leva não apenas o acervo, mas também todas essas ferramentas de aceleração sem pagar nada a mais.
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className="glass-panel-gold rounded-3xl p-6 sm:p-8 border border-yellow-500/40 relative flex flex-col justify-between overflow-hidden group hover:border-yellow-400 transition-colors shadow-2xl"
            >
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 font-mono text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider">
                  BÔNUS #{bonus.number}
                </span>
                <div className="text-right">
                  <span className="text-xs text-neutral-400 line-through mr-2">{bonus.originalValue}</span>
                  <span className="text-xs font-extrabold text-emerald-400 uppercase bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-md">
                    HOJE GRÁTIS
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center shrink-0">
                    {getIcon(bonus.iconName)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    {bonus.title}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-yellow-400 uppercase tracking-wider pl-13">
                  {bonus.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                {bonus.description}
              </p>

              {/* Key Benefits */}
              <ul className="space-y-2.5 border-t border-yellow-500/20 pt-4 text-xs text-neutral-200">
                {bonus.keyBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bonus Total Value Callout Bar */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-yellow-500/50 text-center max-w-4xl mx-auto space-y-4">
          <div className="text-sm font-mono text-neutral-300 uppercase tracking-widest">
            VALOR TOTAL DOS BÔNUS SOMADOS: <span className="text-neutral-500 line-through">R$ 1.138,00</span>
          </div>
          <div className="text-2xl sm:text-4xl font-black text-white">
            SEU CUSTO HOJE COM TUDO INCLUÍDO: <span className="text-gold-gradient">APENAS 12x R$ 9,74</span>
          </div>
          <button
            onClick={onOpenCheckout}
            className="bg-gold-glow hover:bg-yellow-400 text-neutral-950 font-black text-base sm:text-lg px-8 py-4 rounded-xl shadow-2xl transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <Lock className="w-5 h-5 fill-black" />
            <span>RESERVAR MEU BAÚ COM TODOS OS BÔNUS GRÁTIS</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
