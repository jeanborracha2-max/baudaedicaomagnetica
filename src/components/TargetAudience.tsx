import React from 'react';
import { CheckCircle2, UserCheck, Video, Briefcase, Smartphone, Sparkles } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: <UserCheck className="w-6 h-6 text-yellow-400" />,
      title: 'Editores Freelancers',
      desc: 'Para você que precisa editar mais rápido, aceitar mais projetos por mês e cobrar o valor justo pelo seu trabalho sem passar noites em claro.'
    },
    {
      icon: <Video className="w-6 h-6 text-yellow-400" />,
      title: 'YouTubers & Criadores de Conteúdo',
      desc: 'Para transformar seu canal em uma referência visual, aumentar o tempo médio de exibição (AVD) e engajar a audiência do primeiro ao último segundo.'
    },
    {
      icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
      title: 'Agências de Marketing & Infoprodutores',
      desc: 'Para padronizar a qualidade das entregas dos seus editores e criar anúncios de alta conversão para lançamentos e e-commerce.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-yellow-400" />,
      title: 'Criadores de UGC & Vídeos Verticais',
      desc: 'Especialmente útil para quem cria Shorts, Reels e TikToks e precisa prender a atenção nos primeiros 3 segundos de feed.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      title: 'Iniciantes na Edição',
      desc: 'Mesmo que você esteja começando hoje, os presets 1-click e os bônus em vídeo permitem que seu primeiro trabalho pareça de um sênior.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            PÚBLICO-ALVO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            PARA QUEM É O <span className="text-gold-gradient">BAÚ DA EDIÇÃO MAGNÉTICA?</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Se você se encaixa em qualquer uma das categorias abaixo, este acervo foi feito sob medida para a sua rotina.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-neutral-800 hover:border-yellow-500/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
                  {aud.icon}
                </div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{aud.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {aud.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
