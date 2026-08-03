import React, { useState } from 'react';
import { FAQ_DATA } from '../data/packData';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [query, setQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(query.toLowerCase()) ||
      item.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-950 border-t border-amber-500/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            <span>TIRA-DÚVIDAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            PERGUNTAS <span className="text-gold-gradient">FREQUENTES</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            Tire todas as suas dúvidas antes de garantir o seu acesso ao Baú da Edição.
          </p>
        </div>

        {/* Search Input for FAQ */}
        <div className="max-w-md mx-auto relative mb-8">
          <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Digite sua dúvida (ex: acesso, programa, cartão, pix)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 focus:border-yellow-500 rounded-2xl pl-11 pr-4 py-2.5 text-xs text-white focus:outline-none"
          />
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel rounded-2xl border border-neutral-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900/50 transition-colors"
                >
                  <span className="font-bold text-white text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 text-yellow-400 border-yellow-500/40' : 'text-neutral-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-4 bg-neutral-950/40"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
