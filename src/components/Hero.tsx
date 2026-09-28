import React from 'react';
import { ShieldCheck, Zap, Star, Eye, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import magneticChestHero from '../assets/images/magnetic_chest_hero_1784827501379.jpg';

interface HeroProps {
  onOpenCheckout: () => void;
  onScrollToVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onScrollToVideo }) => {
  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Subtle particle grid canvas backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Warning / Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 via-yellow-500/20 to-amber-500/10 border border-yellow-500/40 rounded-full px-4 py-1.5 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-bold text-yellow-300 uppercase tracking-wider">
              ⚡ REVELADO O SEGREDO DOS EDITORES QUE COBRAM +R$ 5.000 POR VÍDEO
            </span>
          </div>

          {/* Main Power Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-5xl uppercase font-sans">
            TRANSFORME QUALQUER VÍDEO COMUM EM UMA{' '}
            <span className="text-gold-gradient drop-shadow-md block sm:inline">
              PRODUÇÃO CINEMATOGRÁFICA
            </span>{' '}
            E DE ALTA RETENÇÃO
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl md:text-2xl text-neutral-300 font-light max-w-3xl leading-relaxed">
            Tenha acesso instantâneo ao acervo definitivo com <strong className="text-yellow-400 font-semibold">+15.000 recursos VIP em 4K/8K</strong>. Arraste e solte SFX, Overlays, LUTs e Presets diretamente na sua timeline em segundos.
          </p>

          {/* Live Viewers & Rating */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-neutral-400 font-medium py-1">
            <div className="flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3.5 py-1.5 rounded-lg">
              <Eye className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span><strong className="text-emerald-400">184 editores</strong> assistindo agora</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-900/80 border border-neutral-800 px-3.5 py-1.5 rounded-lg">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-bold">4.9/5.0</span>
              <span className="text-neutral-500">(1.420 avaliações)</span>
            </div>
          </div>

          {/* Primary Call To Action Button */}
          <div className="pt-2 flex flex-col items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto bg-gold-glow hover:bg-yellow-400 text-neutral-950 font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all transform hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wider"
            >
              <Zap className="w-6 h-6 fill-black" />
              <span>GARANTIR ACESSO COM 90% DE DESCONTO</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" /> Acesso Vitalício</span>
              <span className="text-neutral-600">•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" /> Download Imediato</span>
              <span className="text-neutral-600">•</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-yellow-400" /> 7 Dias de Garantia</span>
            </div>
          </div>

          {/* Product Hero 3D Mockup Container */}
          <div className="relative mt-10 w-full max-w-5xl group">
            {/* Ambient Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 via-amber-500/40 to-yellow-600/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10" />

            <div className="relative glass-panel-gold rounded-3xl p-3 sm:p-5 overflow-hidden shadow-2xl">
              {/* Image Hero Mockup */}
              <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-yellow-500/30 aspect-[16/9] flex items-center justify-center">
                <img
                  src={magneticChestHero}
                  alt="Baú da Edição Magnética 3D Mockup"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Feature Badges */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-yellow-500/40 px-3 py-1.5 rounded-xl text-xs font-bold text-yellow-300 flex items-center gap-2 shadow-xl animate-float">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span>+15.000 Assets 4K/8K</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-yellow-500/40 px-3 py-1.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <Layers className="w-4 h-4 text-yellow-400" />
                  <span>Drag & Drop 1-Click</span>
                </div>

                <div className="absolute top-4 right-4 bg-amber-950/90 backdrop-blur-md border border-amber-500/50 px-3 py-1.5 rounded-xl text-xs font-black text-amber-200 tracking-wider uppercase">
                  ⚡ 90% OFF HOJE
                </div>
              </div>

              {/* Compatible Softwares Strip */}
              <div className="mt-4 pt-4 border-t border-yellow-500/20 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400 px-2">
                <span className="font-semibold text-neutral-300 uppercase tracking-widest text-[11px]">
                  COMPATÍVEL COM TODOS OS EDITORES:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-white font-mono font-bold text-xs">
                  <span className="bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md text-sky-400">Premiere Pro</span>
                  <span className="bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md text-indigo-400">After Effects</span>
                  <span className="bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md text-pink-400">CapCut (PC/Celular)</span>
                  <span className="bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md text-amber-400">DaVinci Resolve</span>
                  <span className="bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md text-purple-400">Final Cut Pro</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
