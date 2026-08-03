import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

interface GuaranteeProps {
  onOpenCheckout: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeProps> = ({ onOpenCheckout }) => {
  return (
    <section id="garantia" className="py-16 md:py-24 bg-black relative border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-yellow-500/50 relative overflow-hidden shadow-2xl">
          
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Generated Gold Seal Badge Image */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1 bg-gradient-to-br from-yellow-300 via-amber-500 to-yellow-600 shadow-2xl animate-float">
                <img
                  src="/src/assets/images/guarantee_seal_1784827524268.jpg"
                  alt="Selo de 7 Dias de Garantia Incondicional"
                  className="w-full h-full object-cover rounded-full filter drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Guarantee Copy Content */}
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-300 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>RISCO ZERO PARA VOCÊ</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                GARANTIA INCONDICIONAL DE <span className="text-gold-gradient">7 DIAS INTEIROS</span>
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Você não assume risco algum ao testar o <strong className="text-yellow-300 font-semibold">Baú da Edição Magnética</strong>. Cadastre-se, acesse a plataforma, baixe os pacotes de SFX, Overlays, LUTs e Presets e aplique nos seus vídeos durante 7 dias.
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Se por qualquer motivo você achar que o conteúdo não economizou seu tempo ou não agregou valor ao seu trabalho, basta enviar uma única mensagem no suporte que <strong className="text-emerald-400 font-semibold">reembolsamos 100% do seu dinheiro sem perguntas</strong>.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenCheckout}
                  className="bg-gold-glow hover:bg-yellow-400 text-black font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all transform hover:scale-105 inline-flex items-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Lock className="w-4 h-4 fill-black" />
                  <span>TESTAR O BAÚ SEM RISCO NENHUM</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
