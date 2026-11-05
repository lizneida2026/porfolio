import React, { useState } from 'react';
import { FAQS } from '../data/professionalData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF6F0] border-t border-[#2A2833]/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5A4A7F]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#2A2833] tracking-tight">
            Resolviendo tus dudas con total claridad
          </h2>
          <p className="text-sm text-[#2A2833]/70 max-w-xl mx-auto">
            Detalles sobre la metodología, el alcance ético de los servicios y el funcionamiento de las sesiones.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white/90 rounded-2xl border border-[#2A2833]/10 overflow-hidden transition-all shadow-sm hover:shadow-lift hover:border-[#5A4A7F]/25"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 hover:bg-[#FAF6F0]/60 transition-colors"
                >
                  <span className="font-serif-title text-base sm:text-lg font-bold text-[#2A2833]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#5A4A7F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#2A2833]/80 leading-relaxed border-t border-[#2A2833]/5 bg-[#FAF6F0]/20">
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
