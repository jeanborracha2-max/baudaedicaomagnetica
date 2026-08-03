import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, Lock, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-black border-t border-amber-500/20 py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-neutral-900 pb-8 text-center md:text-left">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-700 p-0.5">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400/20" />
              </div>
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-sm text-white font-mono uppercase block">
                BAÚ DA EDIÇÃO MAGNÉTICA 8K
              </span>
              <span className="text-[10px] text-neutral-500">
                O Maior Acervo de Recursos para Editores do Brasil
              </span>
            </div>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400">
            <button
              onClick={() => setModalContent('terms')}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              onClick={() => setModalContent('privacy')}
              className="hover:text-yellow-400 transition-colors cursor-pointer"
            >
              Políticas de Privacidade
            </button>
            <span>•</span>
            <a
              href="https://wa.me/5511999999999?text=Olá,%20tenho%20dúvidas%20sobre%20o%20Baú%20da%20Edição%20Magnética"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Suporte via WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="max-w-4xl mx-auto text-center space-y-3 text-[11px] text-neutral-500 leading-relaxed">
          <p>
            AVISO LEGAL: Este site não é afiliado ao Meta, Facebook, Google ou YouTube. Todas as marcas registradas pertencem aos seus respectivos proprietários. Os resultados exibidos são fruto do trabalho de editores profissionais e podem variar de acordo com o empenho individual.
          </p>
          <p>
            © {new Date().getFullYear()} Baú da Edição Magnética. Todos os direitos reservados. CNPJ 00.000.000/0001-00
          </p>
        </div>

      </div>

      {/* Policy Modals */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel p-6 max-w-2xl w-full rounded-2xl border border-yellow-500/30 max-h-[80vh] overflow-y-auto space-y-4 text-neutral-300">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="font-bold text-white text-base uppercase">
                {modalContent === 'terms' ? 'Termos de Uso' : 'Políticas de Privacidade'}
              </h3>
              <button
                onClick={() => setModalContent(null)}
                className="text-neutral-400 hover:text-white font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="text-xs space-y-2 leading-relaxed">
              <p>1. Ao adquirir o Baú da Edição Magnética, você recebe uma licença de uso comercial vitalícia para utilizar os recursos digitais em seus projetos autorais ou comerciais para clientes.</p>
              <p>2. É estritamente proibida a re-venda, compartilhamento público de links de download ou distribuição gratuita dos arquivos originais fora do ambiente autorizado.</p>
              <p>3. Os dados fornecidos no momento do checkout são protegidos por criptografia SSL 256-bit e processados com total segurança.</p>
              <p>4. O reembolso pode ser solicitado integralmente dentro do prazo incondicional de 7 dias através da nossa equipe de suporte.</p>
            </div>
            <button
              onClick={() => setModalContent(null)}
              className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs py-2.5 rounded-xl cursor-pointer uppercase"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
