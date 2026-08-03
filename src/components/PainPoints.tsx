import React from 'react';
import { Clock, AlertTriangle, Frown, DollarSign, Zap, CheckCircle2, XCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/30 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            IDENTIFICAÇÃO DE DORES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            VOCÊ RECONHECE ESSES <span className="text-red-400">PROBLEMAS NA SUA TIMELINE?</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Se você passa por qualquer uma dessas situações, saiba que o problema não é a sua capacidade de editar, mas sim a falta dos recursos certos.
          </p>
        </div>

        {/* Pain Grid vs Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Pain Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-red-500/30 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500/10 px-4 py-1.5 rounded-bl-2xl text-xs font-bold text-red-400 uppercase tracking-widest border-b border-l border-red-500/30">
              O MODO TRADICIONAL CANSATIVO
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase">
                Como a maioria dos editores sofre:
              </h3>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-neutral-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Horas perdidas buscando SFX no YouTube:</strong> Baixando arquivos MP3 com chiado e baixa qualidade de áudio.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Pastas do Google Drive bagunçadas:</strong> Arquivos com nomes genéricos (ex: "Efeito123.mp4") que você nunca encontra a tempo.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Vídeos monótonos e sem retenção:</strong> Clientes reclamando que o público sai nos primeiros 5 segundos.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Preço baixo e concorrência desleal:</strong> Cobrando R$ 50 por vídeo porque não consegue entregar estética de agência.</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="glass-panel-gold p-6 sm:p-8 rounded-3xl border border-yellow-500/50 space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 bg-gold-glow px-4 py-1.5 rounded-bl-2xl text-xs font-black text-black uppercase tracking-widest shadow-md">
              O MÉTODO DA EDIÇÃO MAGNÉTICA
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center text-yellow-400">
                <Zap className="w-5 h-5 fill-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase">
                Como você edita com o Baú:
              </h3>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-neutral-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-yellow-300">Fluxo Drag & Drop Instantâneo:</strong> Abra o painel, arraste e solte SFX 8K e Overlays em 3 segundos.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-yellow-300">Acervo Organizado por Emoção e BPM:</strong> Encontre exatamente o som ou efeito ideal sem perder o foco criativo.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-yellow-300">Retenção de Alto Nível:</strong> Texturas cinematográficas, ganchos visuais e LUTs que encantam o espectador.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-yellow-300">Autoridade para Cobrar R$ 500+ por Vídeo:</strong> Entregue projetos que parecem feitos por produtoras milionárias.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
