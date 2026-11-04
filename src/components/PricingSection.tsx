import React, { useState } from 'react';
import { RateItem } from '../types';
import { Check, Clock, Sparkles, HelpCircle, Edit3, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  rates: RateItem[];
  onSelectBooking: (serviceId?: string) => void;
  onOpenAdmin: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ rates, onSelectBooking, onOpenAdmin }) => {
  // Mini interactive calculator for sessions
  const [calcService, setCalcService] = useState<string>('matematicas-online');
  const [calcQty, setCalcQty] = useState<number>(4);

  const selectedRate = rates.find(r => r.id === calcService) || rates[0];
  const unitPrice = typeof selectedRate.price === 'number' ? selectedRate.price : 0;
  const estimatedTotal = unitPrice * calcQty;

  return (
    <section id="tarifas" className="py-16 md:py-24 bg-[#FAF6F0] border-t border-[#2A2833]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3F6B58]">
              <span>Transparencia & Compromiso</span>
              <span aria-hidden="true">·</span>
              <span>Tarifas orientativas</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2833] tracking-tight">
              Precios claros, honestos y accesibles
            </h2>
            <p className="text-sm sm:text-base text-[#2A2833]/80 leading-relaxed">
              Todos los precios detallados a continuación son orientativos y transparentes. La primera conversación de 15 minutos es completamente gratuita y sin compromiso para conocernos y valorar tus necesidades.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className="text-xs font-medium text-[#5A4A7F] hover:text-[#483968] bg-[#E7E0F4] hover:bg-[#d8cde9] px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
              title="Actualizar importes desde el panel de administración"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editar tarifas (Admin)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {rates.map((rate) => {
            const isFree = rate.price === 0;
            const isCustom = rate.price === 'consultar';

            return (
              <div
                key={rate.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative border ${
                  rate.featured
                    ? 'bg-white border-[#5A4A7F]/30 shadow-md ring-1 ring-[#5A4A7F]/10'
                    : 'bg-white/80 border-[#2A2833]/10 shadow-xs hover:border-[#2A2833]/20'
                }`}
              >
                {/* Free / Highlight Badge */}
                {isFree && (
                  <div className="absolute -top-3 left-6 bg-[#3F6B58] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Sin coste</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#2A2833]/60">
                    <span className="capitalize font-medium text-[#5A4A7F]">
                      {rate.category === 'orientacion'
                        ? 'Orientación'
                        : rate.category === 'docencia'
                        ? 'Docencia'
                        : 'Institucional'}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#2A2833]/40" />
                      {rate.duration}
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl font-bold text-[#2A2833] leading-snug">
                    {rate.name}
                  </h3>

                  <div className="pt-2 pb-1 border-b border-[#2A2833]/5 flex items-baseline gap-2">
                    {isFree ? (
                      <span className="font-serif-title text-4xl font-bold text-[#3F6B58]">
                        0 €
                      </span>
                    ) : isCustom ? (
                      <span className="font-serif-title text-3xl font-bold text-[#5A4A7F]">
                        A medida
                      </span>
                    ) : (
                      <>
                        <span className="font-serif-title text-4xl font-bold text-[#2A2833]">
                          {rate.price} €
                        </span>
                        <span className="text-xs text-[#2A2833]/60 font-medium">
                          / {rate.unit}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-xs text-[#2A2833]/75 leading-relaxed min-h-[48px]">
                    {rate.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2A2833]/5 space-y-3">
                  {rate.id === 'matematicas-presencial' && (
                    <p className="text-[11px] text-[#3F6B58] font-medium leading-tight">
                      * En las clases presenciales, los desplazamientos se acordarán previamente según ubicación en Illescas o comarca.
                    </p>
                  )}

                  <button
                    onClick={() => onSelectBooking(rate.id)}
                    className={`w-full py-2.5 px-4 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 whitespace-nowrap ${
                      rate.featured
                        ? 'bg-[#5A4A7F] text-white hover:bg-[#483968] active:scale-[0.98]'
                        : 'bg-[#FAF6F0] text-[#2A2833] hover:bg-[#E7E0F4] border border-[#2A2833]/10'
                    }`}
                  >
                    <span>{isFree ? 'Solicitar 15 min sin coste' : 'Elegir esta opción'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice on payment policies as instructed by user */}
        <div className="bg-[#FFFFFF] p-6 rounded-3xl border border-[#2A2833]/10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3F6B58]">
              <ShieldCheck className="w-4 h-4" />
              <span>Condiciones transparentes y política de cobro</span>
            </div>
            <p className="text-xs sm:text-sm text-[#2A2833]/80 leading-relaxed">
              <strong>Sin cobros automáticos:</strong> No se realizan cobros online ni suscripciones automáticas. El abono de los servicios se coordina de manera individual y transparente (transferencia o Bizum) tras concertar el horario de la sesión o clase.
            </p>
            <p className="text-xs text-[#2A2833]/60 italic">
              * Los precios son orientativos y podrán actualizarse desde el panel de administración conforme a disponibilidad y acuerdos específicos.
            </p>
          </div>

          {/* Interactive Session Calculator */}
          <div className="lg:col-span-5 bg-[#FAF6F0] p-5 rounded-2xl border border-[#2A2833]/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#2A2833] flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-[#5A4A7F]" />
                <span>Calculadora orientativa de plan</span>
              </span>
              <span className="text-[10px] text-[#2A2833]/60">Estimación rápida</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-[#2A2833]/70 block mb-1">
                  Servicio
                </label>
                <select
                  value={calcService}
                  onChange={(e) => setCalcService(e.target.value)}
                  className="w-full text-xs bg-white border border-[#2A2833]/15 rounded-lg p-2 text-[#2A2833] focus:outline-hidden focus:ring-1 focus:ring-[#5A4A7F]"
                >
                  {rates
                    .filter((r) => typeof r.price === 'number' && r.price > 0)
                    .map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} ({r.price} €/{r.unit})
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-semibold text-[#2A2833]/70 mb-1">
                  <span>Número de sesiones / clases:</span>
                  <span className="font-mono text-[#5A4A7F]">{calcQty}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={calcQty}
                  onChange={(e) => setCalcQty(parseInt(e.target.value))}
                  className="w-full accent-[#5A4A7F] cursor-pointer"
                />
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#2A2833]/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#2A2833]/60 block">Presupuesto orientativo ({calcQty} {selectedRate.unit}s):</span>
                  <span className="text-xs text-[#3F6B58] font-medium">Acordado individualmente</span>
                </div>
                <div className="text-right">
                  <span className="font-serif-title text-2xl font-bold text-[#5A4A7F]">
                    {estimatedTotal} €
                  </span>
                </div>
              </div>

              <button
                onClick={() => onSelectBooking(calcService)}
                className="w-full py-2 bg-[#3F6B58] hover:bg-[#325646] text-white text-xs font-semibold rounded-lg transition-colors text-center"
              >
                Solicitar este plan estimado
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
