import React from 'react';
import { TESTIMONIALS_DATA } from '../data/packData';
import { Star, CheckCircle2, Quote, TrendingUp } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-neutral-950 border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            HISTÓRIAS REAIS DE DESTAQUE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            O QUE OS EDITORES DIZEM SOBRE O <span className="text-gold-gradient">BAÚ DA EDIÇÃO</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Depoimentos de editores freelancers, criadores de conteúdo e videomakers que transformaram sua rotina e faturamento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-neutral-800 hover:border-yellow-500/40 transition-colors flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-10 h-10 text-yellow-500/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars & Result Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{t.metricsResult}</span>
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* User Bio Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/40 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-yellow-400 font-medium">{t.role}</div>
                  <div className="text-[11px] text-neutral-500">{t.channelOrNiche}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
