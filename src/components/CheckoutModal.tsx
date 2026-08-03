import React, { useState, useEffect, useCallback } from 'react';
import { PRICING_TIERS, CHECKOUT_URL } from '../data/packData';
import { Lock, CheckCircle2, QrCode, CreditCard, Copy, Check, ExternalLink, Zap } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [customCheckoutUrl, setCustomCheckoutUrl] = useState(CHECKOUT_URL);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const tier = PRICING_TIERS[0];
  const dummyPixCode = '00020126580014BR.GOV.BCB.PIX0136baudasedicaomagnetica-pix-key-8k-2026520400005303986540597.005802BR5925BAU DA EDICAO MAGNETICA6009SAO PAULO62070503***63041A2F';

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handleCopyPix = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(dummyPixCode);
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 3000);
    }
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = CHECKOUT_URL;
  };

  const handleRedirectExternal = () => {
    const url = customCheckoutUrl.trim() || CHECKOUT_URL;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Checkout seguro Baú da Edição Magnética"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="glass-panel-gold max-w-2xl w-full rounded-3xl p-6 sm:p-8 border-2 border-yellow-500/60 shadow-2xl relative my-8 transition-all duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar checkout"
          className="absolute top-5 right-5 text-neutral-400 hover:text-white font-bold p-2 cursor-pointer rounded-full bg-neutral-900 border border-neutral-800 transition-colors"
        >
          ✕
        </button>

        {!isCompleted ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full uppercase">
                <Lock className="w-3.5 h-3.5" />
                <span>CHECKOUT SEGURO - CRIPTOGRAFIA SSL 256-BIT</span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                GARANTIR <span className="text-gold-gradient">BAÚ DA EDIÇÃO MAGNÉTICA</span>
              </h3>
              <p className="text-xs text-neutral-400">
                Acesso Imediato + Todos os 4 Bônus Gratuitos Incluídos
              </p>
            </div>

            {/* Order Summary Box */}
            <div className="bg-neutral-950 p-4 rounded-2xl border border-yellow-500/30 space-y-2 text-xs">
              <div className="flex items-center justify-between text-neutral-300">
                <span>Plano Vitalício VIP + 15k Recursos</span>
                <span className="line-through text-neutral-500">R$ 997,00</span>
              </div>
              <div className="flex items-center justify-between text-yellow-400 font-bold">
                <span>Desconto de Lançamento (90% OFF)</span>
                <span>- R$ 900,00</span>
              </div>
              <div className="flex items-center justify-between text-emerald-400 font-bold">
                <span>4 Bônus VIP Exclusivos</span>
                <span>GRÁTIS</span>
              </div>
              <div className="border-t border-neutral-800 pt-2 flex items-center justify-between font-black text-white text-base">
                <span>TOTAL HOJE:</span>
                <span className="text-gold-gradient">R$ 97,00 (ou 12x R$ 9,74)</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentMethod('pix')}
                className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'pix'
                    ? 'bg-emerald-950/90 border-emerald-500 text-emerald-300 shadow-lg'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <QrCode className="w-4 h-4 text-emerald-400" />
                <span>PIX (Acesso Instantâneo)</span>
              </button>

              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'bg-yellow-500/20 border-yellow-500 text-yellow-300 shadow-lg'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <CreditCard className="w-4 h-4 text-yellow-400" />
                <span>Cartão até 12x</span>
              </button>
            </div>

            {/* Payment Content View */}
            {paymentMethod === 'pix' ? (
              <div className="bg-neutral-950 p-5 rounded-2xl border border-emerald-500/30 text-center space-y-4">
                <div className="inline-block bg-white p-3 rounded-xl shadow-xl">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=00020126580014BR.GOV.BCB.PIX0136baudasedicaomagnetica-pix-key-8k-2026"
                    alt="QR Code PIX"
                    className="w-36 h-36 mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-neutral-300">
                    Escaneie o QR Code acima no app do seu banco ou copie a chave do PIX abaixo:
                  </div>

                  <div className="flex items-center gap-2 max-w-md mx-auto">
                    <input
                      type="text"
                      readOnly
                      value={dummyPixCode}
                      className="bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400 rounded-lg p-2.5 flex-1 truncate"
                    />
                    <button
                      onClick={handleCopyPix}
                      className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs px-3 py-2.5 rounded-lg flex items-center gap-1 shrink-0 cursor-pointer uppercase"
                    >
                      {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedPix ? 'Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleSimulatePayment}
                  disabled={isProcessing}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm py-3.5 rounded-xl transition-all cursor-pointer uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>{isProcessing ? 'Confirmando Pagamento...' : 'Já Fiz o Pagamento PIX'}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSimulatePayment} className="space-y-3 text-xs">
                <div>
                  <label className="text-neutral-300 font-medium block mb-1">Nome no Cartão</label>
                  <input
                    type="text"
                    required
                    placeholder="Como impresso no cartão"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-neutral-300 font-medium block mb-1">Número do Cartão</label>
                  <input
                    type="text"
                    required
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-400 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-neutral-300 font-medium block mb-1">Validade (MM/AA)</label>
                    <input
                      type="text"
                      required
                      placeholder="12/28"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-400 font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-neutral-300 font-medium block mb-1">CVV</label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-400 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-neutral-300 font-medium block mb-1">Parcelamento</label>
                  <select className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-400">
                    <option>12x de R$ 9,74 (Total R$ 116,88)</option>
                    <option>6x de R$ 17,50 (Total R$ 105,00)</option>
                    <option>1x de R$ 97,00 à vista (Sem juros)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gold-glow hover:bg-yellow-400 text-black font-black text-sm py-3.5 rounded-xl transition-all cursor-pointer uppercase tracking-wider shadow-lg mt-2 flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4 fill-black" />
                  <span>{isProcessing ? 'Processando Cartão...' : 'Finalizar Inscrição Segura'}</span>
                </button>
              </form>
            )}

            {/* Optional Custom Gateway Integration Option */}
            <div className="pt-3 border-t border-neutral-800 space-y-2">
              <label className="text-[11px] font-mono text-neutral-400 block">
                OU Integrar Seu Link de Checkout Externo (Hotmart / Kiwify / Mercado Pago):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder={CHECKOUT_URL}
                  value={customCheckoutUrl}
                  onChange={(e) => setCustomCheckoutUrl(e.target.value)}
                  className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5 text-xs text-white flex-1 focus:outline-none focus:border-yellow-500"
                />
                <button
                  onClick={handleRedirectExternal}
                  className="bg-neutral-800 hover:bg-neutral-700 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Ir para Checkout</span>
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* Successful Confirmation View */
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white uppercase">
                PARABÉNS! SEU ACESSO FOI LIBERADO!
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Enviamos os dados de login e o link do drive VIP para o seu e-mail cadastrado.
              </p>
            </div>

            <div className="bg-neutral-950 p-4 rounded-2xl border border-emerald-500/30 text-xs text-neutral-300 space-y-2 text-left max-w-md mx-auto">
              <div className="font-bold text-emerald-400 uppercase">Resumo do Pedido #8K-{Math.floor(Math.random() * 90000 + 10000)}</div>
              <div>• Status: <strong className="text-emerald-400">PAGO E CONFIRMADO</strong></div>
              <div>• Produto: Baú da Edição Magnética VIP 8K</div>
              <div>• Todos os 4 Bônus Ativados</div>
            </div>

            <button
              onClick={onClose}
              className="bg-gold-glow text-black font-black text-xs px-8 py-3 rounded-xl uppercase tracking-wider cursor-pointer"
            >
              FECHAR E ACESSAR MEU E-MAIL
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
