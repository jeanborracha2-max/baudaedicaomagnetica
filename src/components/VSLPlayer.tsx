import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Sparkles, Zap, Lock, ArrowRight } from 'lucide-react';
import vslThumbnailCover from '../assets/images/vsl_thumbnail_cover_1784827513327.jpg';

interface VSLPlayerProps {
  onOpenCheckout: () => void;
}

// ============================================================================
// CONFIGURAÇÃO INTERNA DO VÍDEO (Invisível para os visitantes da página)
// Insira aqui a URL do seu vídeo (YouTube, Vimeo ou link direto MP4):
// Exemplo YouTube: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
// Exemplo Vimeo: 'https://vimeo.com/76979871'
// Exemplo MP4: 'https://seusite.com/video.mp4'
// ============================================================================
const VIDEO_URL = 'https://youtu.be/LtgL6WE4d4E';
const THUMBNAIL_URL = vslThumbnailCover;

function getEmbedDetails(url: string, autoPlay: boolean) {
  if (!url) return { type: 'video', src: '' };

  const trimmed = url.trim();

  // YouTube match
  if (trimmed.includes('youtube.com') || trimmed.includes('youtu.be')) {
    let videoId = '';
    if (trimmed.includes('youtu.be/')) {
      videoId = trimmed.split('youtu.be/')[1]?.split('?')[0] || '';
    } else if (trimmed.includes('watch?v=')) {
      videoId = trimmed.split('watch?v=')[1]?.split('&')[0] || '';
    } else if (trimmed.includes('embed/')) {
      videoId = trimmed.split('embed/')[1]?.split('?')[0] || '';
    }
    const autoplayParam = autoPlay ? 'autoplay=1&muted=0&rel=0&modestbranding=1' : 'autoplay=0&rel=0&modestbranding=1';
    return {
      type: 'youtube',
      src: `https://www.youtube.com/embed/${videoId}?${autoplayParam}`
    };
  }

  // Vimeo match
  if (trimmed.includes('vimeo.com')) {
    const vimeoId = trimmed.split('vimeo.com/')[1]?.split('?')[0] || '';
    const autoplayParam = autoPlay ? 'autoplay=1&muted=0' : 'autoplay=0';
    return {
      type: 'vimeo',
      src: `https://player.vimeo.com/video/${vimeoId}?${autoplayParam}`
    };
  }

  // Direct MP4 / WebM / Media
  return {
    type: 'video',
    src: trimmed
  };
}

export const VSLPlayer: React.FC<VSLPlayerProps> = ({ onOpenCheckout }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const embedDetails = getEmbedDetails(VIDEO_URL, hasStarted);

  const handleStartPlay = () => {
    setHasStarted(true);
    if (embedDetails.type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for browser media policy
      });
    }
  };

  return (
    <section id="vsl-video" className="relative py-12 md:py-20 bg-neutral-950/80 border-y border-amber-500/20">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/20 to-black pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 text-yellow-400 font-mono text-xs uppercase tracking-widest font-bold bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>APRESENTAÇÃO OFICIAL EM VÍDEO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
            ASSISTA AO VÍDEO ABAIXO E DESCUBRA O <span className="text-gold-gradient">SEGREDO DA EDIÇÃO MAGNÉTICA</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Aperte o PLAY e veja como você pode transformar suas edições de vídeos e faturar muito com o Baú Da Edição Magnética.
          </p>
        </div>

        {/* Video Frame Outer Glow */}
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />

          {/* Player Container */}
          <div className="relative glass-panel-gold rounded-2xl overflow-hidden border border-yellow-500/40 shadow-2xl">
            
            {/* Top Sound Warning Banner */}
            {!hasStarted ? (
              <button
                onClick={handleStartPlay}
                className="w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-neutral-950 font-black text-xs sm:text-sm py-2.5 px-4 text-center flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider shadow-md"
              >
                <VolumeX className="w-4 h-4 text-black animate-bounce" />
                <span>🔊 SEU VÍDEO JÁ ESTÁ PRONTO! CLIQUE AQUI PARA OUVIR O ÁUDIO</span>
              </button>
            ) : (
              <div className="w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-neutral-950 font-black text-xs sm:text-sm py-2.5 px-4 text-center flex items-center justify-center gap-2 uppercase tracking-wider shadow-md">
                <Volume2 className="w-4 h-4 text-black" />
                <span>ÁUDIO ATIVADO • VÍDEO EM REPRODUÇÃO</span>
              </div>
            )}

            {/* Video Body Content */}
            <div className="relative aspect-[16/9] bg-neutral-950 overflow-hidden flex items-center justify-center">
              {!hasStarted ? (
                /* Cover & Centered Play Button Overlay */
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={THUMBNAIL_URL}
                    alt="VSL Baú da Edição Magnética Video Cover"
                    className="w-full h-full object-cover opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                  {/* Big Play Overlay Button */}
                  <button
                    onClick={handleStartPlay}
                    className="group/play absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/20 hover:bg-black/10 transition-all"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-glow flex items-center justify-center p-0.5 shadow-2xl shadow-yellow-500/50 group-hover/play:scale-110 transition-transform">
                      <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center border border-yellow-400">
                        <Play className="w-10 h-10 text-yellow-400 fill-yellow-400 ml-1.5" />
                      </div>
                    </div>
                    <span className="mt-4 bg-black/80 border border-yellow-500/40 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-yellow-300 uppercase tracking-widest shadow-xl">
                      CLIQUE PARA ASSISTIR AGORA
                    </span>
                  </button>
                </div>
              ) : (
                /* Video Player Active View */
                embedDetails.type === 'youtube' || embedDetails.type === 'vimeo' ? (
                  <iframe
                    src={embedDetails.src}
                    title="Apresentação VSL Baú da Edição Magnética"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={embedDetails.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )
              )}
            </div>

            {/* Video Footer Info */}
            <div className="p-3.5 bg-neutral-950 flex items-center justify-center text-xs border-t border-amber-500/20 text-neutral-300 font-medium gap-2">
              <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
              <span>Vídeo explicativo curto • Assista até o final para liberar sua oferta</span>
            </div>

          </div>
        </div>

        {/* Post-Video Direct CTA Callout */}
        <div className="mt-8 text-center space-y-4">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto bg-gold-glow hover:bg-yellow-400 text-neutral-950 font-black text-lg sm:text-2xl px-10 py-5 rounded-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-3 cursor-pointer uppercase tracking-wider"
          >
            <Lock className="w-6 h-6 fill-black" />
            <span>QUERO DESTRAVAR O BAÚ DA EDIÇÃO AGORA</span>
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-xs text-neutral-400">
            🔒 Compra 100% Segura • Acesso Imediato no seu E-mail • Satisfação Garantida
          </p>
        </div>

      </div>
    </section>
  );
};
