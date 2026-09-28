import React, { useState } from 'react';
import { Star, TrendingUp, Users, Award, Zap, Sliders, Check, X } from 'lucide-react';
import { BEFORE_AFTER_COMPARISON } from '../data/packData';
import magneticChestHero from '../assets/images/magnetic_chest_hero_1784827501379.jpg';
import vslThumbnailCover from '../assets/images/vsl_thumbnail_cover_1784827513327.jpg';

export const SocialProof: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            RESULTADOS COMPROVADOS NA PRÁTICA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            NÚMEROS QUE PROVAM O PODER DO <span className="text-gold-gradient">BAÚ DA EDIÇÃO</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Veja a transformação direta no tempo de trabalho e na métrica de retenção dos editores que utilizam nossos recursos diariamente.
          </p>
        </div>

        {/* 4 Stat Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          <div className="glass-panel p-6 rounded-2xl border border-yellow-500/20 text-center space-y-2 hover:border-yellow-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto text-yellow-400">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono text-gold-gradient">
              +15.000
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-300 uppercase tracking-wider">
              Recursos 4K/8K
            </div>
            <p className="text-[11px] text-neutral-500">SFX, Overlays, LUTs e Presets</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-yellow-500/20 text-center space-y-2 hover:border-yellow-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto text-yellow-400">
              <Star className="w-6 h-6 fill-yellow-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono text-gold-gradient">
              4.9 / 5.0
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-300 uppercase tracking-wider">
              Avaliação Média
            </div>
            <p className="text-[11px] text-neutral-500">+1.420 editores satisfeitos</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-yellow-500/20 text-center space-y-2 hover:border-yellow-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto text-yellow-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono text-gold-gradient">
              +210%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-300 uppercase tracking-wider">
              Retenção Média
            </div>
            <p className="text-[11px] text-neutral-500">Aumento nos primeiros 5s</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-yellow-500/20 text-center space-y-2 hover:border-yellow-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mx-auto text-yellow-400">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono text-gold-gradient">
              R$ 12.5M+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-300 uppercase tracking-wider">
              Gerados por Alunos
            </div>
            <p className="text-[11px] text-neutral-500">Em contratos de edição e views</p>
          </div>
        </div>

        {/* Interactive Before & After Visual Slider */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 border border-yellow-500/30 relative">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest">
              COMPARAÇÃO VISUAL NA TIMELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase">
              VEJA A DIFERENÇA ENTRE UMA <span className="text-red-400">EDIÇÃO COMUM</span> E UMA <span className="text-gold-gradient">EDIÇÃO MAGNÉTICA</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Arraste a barra para comparar o resultado e as métricas de retenção antes e depois de usar o Baú.
            </p>
          </div>

          {/* Interactive Comparison Container */}
          <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-yellow-500/40 select-none shadow-2xl">
            
            {/* "AFTER" (Magnetic Edition) Background Image */}
            <div className="absolute inset-0 bg-neutral-900">
              <img
                src={magneticChestHero}
                alt="Edição Magnética"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter brightness-110 saturate-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>EDIÇÃO MAGNÉTICA (COM O BAÚ)</span>
              </div>

              {/* After Stats Overlay */}
              <div className="absolute bottom-4 right-4 glass-panel-gold p-3 rounded-xl text-right text-xs space-y-1 text-yellow-300 hidden sm:block">
                <div>Retenção: <strong className="text-white">{BEFORE_AFTER_COMPARISON.afterMetrics.retention}</strong></div>
                <div>Tempo de Exibição: <strong className="text-white">{BEFORE_AFTER_COMPARISON.afterMetrics.avgWatchTime}</strong></div>
                <div>CTR Anúncio: <strong className="text-emerald-400 font-bold">{BEFORE_AFTER_COMPARISON.afterMetrics.ctr}</strong></div>
              </div>
            </div>

            {/* "BEFORE" (Raw Boring Edition) Clipped Overlay */}
            <div
              className="absolute inset-0 bg-neutral-950 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={vslThumbnailCover}
                alt="Edição Comum"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter grayscale opacity-60 contrast-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-red-950/90 border border-red-500/50 text-red-300 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5">
                <X className="w-4 h-4 text-red-400" />
                <span>EDIÇÃO CRUA & COMUM</span>
              </div>

              {/* Before Stats Overlay */}
              <div className="absolute bottom-4 left-4 bg-black/80 p-3 rounded-xl text-left text-xs space-y-1 text-neutral-400 hidden sm:block">
                <div>Retenção: <strong className="text-neutral-300">{BEFORE_AFTER_COMPARISON.beforeMetrics.retention}</strong></div>
                <div>Tempo de Exibição: <strong className="text-neutral-300">{BEFORE_AFTER_COMPARISON.beforeMetrics.avgWatchTime}</strong></div>
                <div>CTR Anúncio: <strong className="text-red-400">{BEFORE_AFTER_COMPARISON.beforeMetrics.ctr}</strong></div>
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-yellow-400 shadow-[0_0_15px_#facc15] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold-glow text-black font-black flex items-center justify-center text-xs shadow-lg">
                <Sliders className="w-4 h-4" />
              </div>
            </div>

            {/* Range Input Slider Control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
            />
          </div>

          {/* Comparison Cards Text Below */}
          <div className="grid sm:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto text-xs sm:text-sm">
            <div className="bg-neutral-900/80 border border-red-500/30 p-4 rounded-xl space-y-2">
              <h4 className="font-bold text-red-400 uppercase flex items-center gap-1.5">
                <X className="w-4 h-4" /> {BEFORE_AFTER_COMPARISON.beforeTitle}
              </h4>
              <p className="text-neutral-400 leading-relaxed">
                {BEFORE_AFTER_COMPARISON.beforeDesc}
              </p>
            </div>

            <div className="bg-neutral-900/80 border border-yellow-500/40 p-4 rounded-xl space-y-2">
              <h4 className="font-bold text-yellow-300 uppercase flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" /> {BEFORE_AFTER_COMPARISON.afterTitle}
              </h4>
              <p className="text-neutral-300 leading-relaxed">
                {BEFORE_AFTER_COMPARISON.afterDesc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
