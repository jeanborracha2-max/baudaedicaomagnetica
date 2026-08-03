import React, { useState, useEffect, useCallback } from 'react';
import { PACKS_DATA } from '../data/packData';
import { PackCategory, PackItem } from '../types';
import { Search, Volume2, Layers, Palette, Zap, Video, Type, Sliders, Box, Download, Check, Sparkles, Folder } from 'lucide-react';

interface PackVaultProps {
  onOpenCheckout: () => void;
}

export const PackVault: React.FC<PackVaultProps> = ({ onOpenCheckout }) => {
  const [activeCategory, setActiveCategory] = useState<PackCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewPack, setPreviewPack] = useState<PackItem | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setPreviewPack(null);
    }
  }, []);

  useEffect(() => {
    if (previewPack) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewPack, handleKeyDown]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Volume2': return <Volume2 className="w-6 h-6 text-yellow-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-yellow-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-yellow-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-yellow-400" />;
      case 'Video': return <Video className="w-6 h-6 text-yellow-400" />;
      case 'Type': return <Type className="w-6 h-6 text-yellow-400" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-yellow-400" />;
      case 'Box': return <Box className="w-6 h-6 text-yellow-400" />;
      default: return <Folder className="w-6 h-6 text-yellow-400" />;
    }
  };

  const categories: { id: PackCategory; label: string }[] = [
    { id: 'all', label: 'Ver Todos (+15k)' },
    { id: 'sfx', label: 'SFX 8K' },
    { id: 'overlays', label: 'Overlays 4K' },
    { id: 'luts', label: 'LUTs Cinema' },
    { id: 'transitions', label: 'Transições' },
    { id: 'templates', label: 'Templates Virais' },
    { id: 'fonts', label: 'Fontes' },
    { id: 'presets', label: 'Presets 1-Click' },
  ];

  const filteredPacks = PACKS_DATA.filter((pack) => {
    const matchesCategory = activeCategory === 'all' || pack.category === activeCategory;
    const matchesSearch =
      pack.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pack.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pack.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="recursos" className="py-16 md:py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            EXPLORE O CONTEÚDO DO BAÚ
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            MAIS DE <span className="text-gold-gradient">15.000 RECURSOS MAGNÉTICOS</span> DIVIDIDOS EM MÓDULOS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Tudo o que você precisa para criar edições profissionais sem precisar garimpar na internet. Clique nos filtros para navegar.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-6 mb-12">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por recurso (ex: Whoosh, LUT, Film Grain, CapCut)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900/90 border border-neutral-800 focus:border-yellow-500 rounded-2xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gold-glow text-neutral-950 font-black shadow-lg shadow-yellow-500/20'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPacks.map((pack) => (
            <div
              key={pack.id}
              className={`glass-panel rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 ${
                pack.isPopular ? 'border-yellow-500/50 bg-neutral-900/90' : 'border-neutral-800 hover:border-yellow-500/30'
              }`}
            >
              <div>
                {/* Badge & Item Count */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-2.5 py-1 rounded-md uppercase">
                    {pack.badge}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {pack.size}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(pack.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base leading-snug group-hover:text-yellow-300 transition-colors">
                      {pack.title}
                    </h3>
                    <div className="text-xs font-mono font-bold text-yellow-400 mt-0.5">
                      {pack.itemCount}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {pack.description}
                </p>

                {/* Highlights list */}
                <ul className="space-y-2 mb-6 border-t border-neutral-800/80 pt-4">
                  {pack.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Preview Modal trigger */}
              <button
                onClick={() => setPreviewPack(pack)}
                className="w-full bg-neutral-900 hover:bg-yellow-500/20 border border-yellow-500/30 hover:border-yellow-400 text-yellow-300 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>VER PRÉVIA DESTE PACK</span>
              </button>
            </div>
          ))}
        </div>

        {/* Global Vault CTA Footer */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenCheckout}
            className="bg-gold-glow hover:bg-yellow-400 text-neutral-950 font-black text-base sm:text-xl px-10 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all transform hover:scale-105 inline-flex items-center gap-3 cursor-pointer uppercase"
          >
            <Download className="w-6 h-6" />
            <span>BAIXAR O ACERVO COMPLETO DE +15.000 RECURSOS</span>
          </button>
        </div>

      </div>

      {/* Preview Pack Modal Overlay */}
      {previewPack && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Prévia do pack ${previewPack.title}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setPreviewPack(null);
          }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="glass-panel-gold max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-yellow-500/50 space-y-5 relative transition-all duration-300">
            <div className="flex items-center justify-between border-b border-yellow-500/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center text-yellow-400">
                  {getIcon(previewPack.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{previewPack.title}</h3>
                  <span className="text-xs text-yellow-400 font-mono">{previewPack.itemCount}</span>
                </div>
              </div>
              <button
                onClick={() => setPreviewPack(null)}
                className="text-neutral-400 hover:text-white text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {previewPack.description}
            </p>

            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2 text-xs">
              <div className="font-bold text-yellow-400 uppercase">O que está incluído nesta pasta:</div>
              {previewPack.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  setPreviewPack(null);
                  onOpenCheckout();
                }}
                className="flex-1 bg-gold-glow text-black font-black text-xs py-3 rounded-xl uppercase tracking-wider cursor-pointer"
              >
                QUERO ESTE PACK NO MEU BAÚ
              </button>
              <button
                onClick={() => setPreviewPack(null)}
                className="px-4 bg-neutral-900 text-neutral-400 hover:text-white font-bold text-xs rounded-xl cursor-pointer"
              >
                FECHAR
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
