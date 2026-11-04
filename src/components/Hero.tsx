import React from 'react';
import { PROFESSIONAL_IDENTITY } from '../data/professionalData';
import { ArrowDown, Calendar, Compass, GraduationCap, MapPin, Sparkles, Upload } from 'lucide-react';

interface HeroProps {
  profilePhotoUrl: string | null;
  onOpenAdmin: () => void;
  onSelectBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ profilePhotoUrl, onOpenAdmin, onSelectBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E7E0F4]/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DCEAE2]/40 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Trust Signals (clean unboxed text with · separators) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#3F6B58]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PROFESSIONAL_IDENTITY.location}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Online & Presencial</span>
              <span aria-hidden="true">·</span>
              <span>Atención personalizada</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#5A4A7F]">
                {PROFESSIONAL_IDENTITY.mainHeadline}
              </span>
              <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2A2833] leading-[1.1] text-balance">
                Lizneida Cordero
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#5A4A7F] leading-snug">
                {PROFESSIONAL_IDENTITY.rolesSubtitle}
              </p>
            </div>

            {/* Motto */}
            <p className="font-serif-title text-xl sm:text-2xl italic text-[#3F6B58] border-l-0 pl-0">
              {PROFESSIONAL_IDENTITY.motto}
            </p>

            {/* Presentation Quote (Exact as required) */}
            <div className="bg-[#FFFFFF]/80 backdrop-blur-xs border border-[#2A2833]/10 rounded-2xl p-6 shadow-xs relative">
              <p className="text-[#2A2833]/90 text-base sm:text-lg leading-relaxed italic">
                {PROFESSIONAL_IDENTITY.presentationQuote}
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-[#2A2833]/60 pt-2 border-t border-[#2A2833]/5">
                <span>Lizneida M. Cordero Valero</span>
                <span>UPEL (1993) · C.I.P.P.S.V. (2009)</span>
              </div>
            </div>

            {/* CTAs: 2 main buttons as requested */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onSelectBooking()}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#5A4A7F] hover:bg-[#483968] active:scale-[0.98] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-[#E7E0F4]" />
                <span>Solicita información sobre mis servicios</span>
              </button>

              <button
                onClick={() => scrollTo('sobre-mi')}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#2A2833] bg-white hover:bg-[#F1EAE0] border border-[#2A2833]/15 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <GraduationCap className="w-4 h-4 text-[#3F6B58]" />
                <span>Conoce mi trayectoria profesional</span>
              </button>
            </div>

            {/* Micro Pillars Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#2A2833]/80">
              <div className="bg-white/60 p-3 rounded-xl border border-[#2A2833]/5">
                <span className="font-semibold text-[#5A4A7F] block text-sm">Docencia Matemática</span>
                Primaria, secundaria y refuerzo lógico paso a paso.
              </div>
              <div className="bg-white/60 p-3 rounded-xl border border-[#2A2833]/5">
                <span className="font-semibold text-[#3F6B58] block text-sm">Orientación Conductual</span>
                Magíster acreditada: crecimiento, hábitos y adaptación.
              </div>
              <div className="bg-white/60 p-3 rounded-xl border border-[#2A2833]/5 col-span-2 sm:col-span-1">
                <span className="font-semibold text-[#2A2833] block text-sm">1ª Charla de 15 min</span>
                Informativa y sin coste para valorar tu necesidad.
              </div>
            </div>

          </div>

          {/* Right Column: Portrait Card Reserved Space (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#2A2833]/10 shadow-sm relative group">
                
                {/* Photo Frame Container */}
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-gradient-to-b from-[#F1EAE0] to-[#E7E0F4]/50 border border-[#2A2833]/10 flex flex-col items-center justify-center text-center p-6">
                  {profilePhotoUrl ? (
                    <img
                      src={profilePhotoUrl}
                      alt="Fotografía profesional de Lizneida Cordero"
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-4 max-w-xs">
                      {/* Monogram Seal */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#5A4A7F] to-[#3F6B58] text-[#FAF6F0] flex items-center justify-center shadow-inner">
                        <span className="font-serif-title text-4xl font-semibold tracking-wider">
                          LC
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h2 className="font-serif-title text-2xl font-bold text-[#2A2833]">
                          Lizneida Cordero
                        </h2>
                        <p className="text-xs text-[#2A2833]/70 font-medium">
                          Espacio reservado para fotografía profesional
                        </p>
                      </div>

                      <p className="text-[11px] text-[#2A2833]/60 leading-relaxed px-2">
                        Reservado para la incorporación de la fotografía oficial facilitada por Lizneida. Puedes cargarla en cualquier momento desde el panel de gestión.
                      </p>

                      <button
                        onClick={onOpenAdmin}
                        className="mt-2 text-xs font-semibold text-[#5A4A7F] hover:text-[#483968] bg-[#E7E0F4] hover:bg-[#d8cde9] px-3.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Subir fotografía oficial</span>
                      </button>
                    </div>
                  )}

                  {/* Corner aesthetic badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase text-[#3F6B58] border border-[#2A2833]/5">
                    Perfil Oficial
                  </div>
                </div>

                {/* Card footer caption */}
                <div className="pt-4 px-1 flex items-center justify-between text-xs text-[#2A2833]/70">
                  <div className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#5A4A7F]" />
                    <span>Trayectoria Internacional</span>
                  </div>
                  <span className="font-medium text-[#3F6B58]">VE · RD · USA · ES</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
