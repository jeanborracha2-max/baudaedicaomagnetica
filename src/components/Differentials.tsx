import React from 'react';
import { Server, FolderTree, ShieldCheck, Cpu, RefreshCw, Zap } from 'lucide-react';

export const Differentials: React.FC = () => {
  const list = [
    {
      icon: <Server className="w-6 h-6 text-yellow-400" />,
      title: 'Servidor VIP de Ultra Velocidade',
      desc: 'Nada de links quebrados ou downloads lentos. Hospedagem em servidores dedicados com taxa de transferência de até 1Gbps.'
    },
    {
      icon: <FolderTree className="w-6 h-6 text-yellow-400" />,
      title: 'Organização Psicológica por Intenção',
      desc: 'Em vez de pastas bagunçadas, os SFX e mídias são organizados por emoção (Tensão, Impacto, Suavidade, Comédia, Cyberpunk).'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-yellow-400" />,
      title: 'Licença Comercial Royalty-Free 100%',
      desc: 'Use em canais monetizados no YouTube, trabalhos para clientes locais, comerciais de TV e anúncios sem risco de strike de copyright.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-yellow-400" />,
      title: 'Compatibilidade Universal Cross-Platform',
      desc: 'Seus arquivos funcionam perfeitamente seja no Adobe Premiere, After Effects, CapCut de celular ou PC, DaVinci Resolve ou Final Cut Pro.'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-yellow-400" />,
      title: 'Novos Packs Adicionados Todos os Meses',
      desc: 'Sua assinatura é vitalícia e você recebe novos arquivos de tendências virais todo mês sem pagar 1 centavo extra por isso.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Fluxo 1-Click Drag & Drop',
      desc: 'Não requer conhecimentos avançados. Basta arrastar os arquivos do seu explorador direto para a timeline do seu programa.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-950 border-t border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            POR QUE O BAÚ É DIFERENTE?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            NÃO É APENAS UM DRIVE DE ARQUIVOS. <span className="text-gold-gradient">É UM SISTEMA DE PRODUTIVIDADE</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Desenvolvido por editores para editores. Eliminamos tudo o que atrasa a sua edição e mantivemos apenas o mais puro ouro.
          </p>
        </div>

        {/* 6 Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-neutral-800 hover:border-yellow-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
