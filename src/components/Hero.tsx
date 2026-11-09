import React from 'react';
import { PROFESSIONAL_IDENTITY } from '../data/professionalData';
import { Calendar, Compass, GraduationCap, MapPin, Sparkles, ArrowRight, Brain, BookOpen, HeartHandshake } from 'lucide-react';

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
    <section id="inicio" className="relative pt-6 pb-14 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-8 right-0 w-[32rem] h-[32rem] bg-[#E7E0F4]/55 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-[#DCEAE2]/60 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Trust Signals (clean unboxed text with · separators) */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[.16em] text-[#3F6B58] bg-white/70 border border-[#3F6B58]/15 rounded-full px-3.5 py-2 shadow-xs">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PROFESSIONAL_IDENTITY.location}</span>
              </span>
              <span aria-hidden="true" className="text-[#5A4A7F]">·</span>
              <span>Online & Presencial</span>
              <span aria-hidden="true">·</span>
              <span>Atención personalizada</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#5A4A7F]">
                {PROFESSIONAL_IDENTITY.clinicName}
              </span>
              <h1 className="font-serif-title text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2A2833] leading-[.96] text-balance">
                ¿Sientes que estás dando vueltas<br /><span className="text-[#5A4A7F] italic">y no consigues avanzar?</span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#5A4A7F] leading-snug">
                {PROFESSIONAL_IDENTITY.rolesSubtitle}
              </p>
            </div>

            {/* Motto */}
            <p className="font-serif-title text-xl sm:text-2xl italic text-[#3F6B58] border-l-2 border-[#3F6B58]/40 pl-4 max-w-xl">
              {PROFESSIONAL_IDENTITY.motto}
            </p>

            {/* Presentation Quote (Exact as required) */}
            <div className="bg-white/75 backdrop-blur-sm border border-white/80 rounded-2xl p-5 shadow-lift relative max-w-2xl">
              <p className="text-[#2A2833]/90 text-base sm:text-lg leading-relaxed italic">
                {PROFESSIONAL_IDENTITY.presentationQuote}
              </p>
            </div>

            {/* CTAs: 2 main buttons as requested */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onSelectBooking()}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#5A4A7F] hover:bg-[#483968] active:scale-[0.98] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-[#E7E0F4]" />
                <span>Cuéntame qué necesitas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('sobre-mi')}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-[#2A2833] bg-white hover:bg-[#F1EAE0] border border-[#2A2833]/15 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <GraduationCap className="w-4 h-4 text-[#3F6B58]" />
                <span>Conoce el método</span>
              </button>
            </div>

            {/* Need-led choices */}
            <div className="pt-3 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[.14em] text-[#2A2833]/55">Quizá hoy necesitas…</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#2A2833]/80">
                <div className="bg-white/70 p-4 rounded-2xl border border-white/80 shadow-xs">
                  <BookOpen className="w-5 h-5 text-[#5A4A7F] mb-2" />
                  <span className="font-semibold text-[#5A4A7F] block text-sm">Entender mejor</span>
                  Apoyo en Matemáticas, estudio y organización.
                </div>
                <div className="bg-white/70 p-4 rounded-2xl border border-white/80 shadow-xs">
                  <Brain className="w-5 h-5 text-[#3F6B58] mb-2" />
                  <span className="font-semibold text-[#3F6B58] block text-sm">Ordenarte por dentro</span>
                  Hábitos, autoestima, estrés y decisiones.
                </div>
                <div className="bg-white/70 p-4 rounded-2xl border border-white/80 shadow-xs">
                  <HeartHandshake className="w-5 h-5 text-[#2A2833] mb-2" />
                  <span className="font-semibold text-[#2A2833] block text-sm">Volver a confiar</span>
                  Acompañamiento cercano para tu siguiente paso.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait Card Reserved Space (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#5A4A7F]/20 via-transparent to-[#3F6B58]/20 blur-xl -z-10" />
              <div className="bg-white/90 p-4 sm:p-5 rounded-[2rem] border border-white shadow-lift-lg relative group">
                
                {/* Photo Frame Container */}
                <div className="relative aspect-[4/5] rounded-[1.35rem] overflow-hidden bg-gradient-to-b from-[#F1EAE0] to-[#E7E0F4]/50 border border-[#2A2833]/10 flex flex-col items-center justify-center text-center p-6">
                  {profilePhotoUrl ? (
                    <img
                      src={profilePhotoUrl}
                      alt="Fotografía profesional de Lizneida Cordero"
                      className="w-full h-full object-cover rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="relative w-full h-full -m-6 flex flex-col items-center justify-end p-6 overflow-hidden">
                      <img
                        src="/src/assets/images/counseling_space_warm_1793792997156.jpg"
                        alt="Espacio cálido del Consultorio Virtual Aprender a Desaprender"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2A2833]/90 via-[#2A2833]/20 to-transparent" />
                      <div className="relative z-10 text-left w-full space-y-2">
                        <div className="w-16 h-16 rounded-full bg-white/90 text-[#5A4A7F] flex items-center justify-center shadow-inner">
                          <span className="font-serif-title text-3xl font-semibold tracking-wider">LC</span>
                        </div>
                        <h2 className="font-serif-title text-2xl font-bold text-white">
                          Aprender a Desaprender
                        </h2>
                        <p className="text-xs text-white/80 font-medium">
                          Un espacio para comprenderte y avanzar.
                        </p>
                      </div>
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

        {/* Credibility strip: fast proof points before the visitor continues */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[#2A2833]/10 bg-[#2A2833]/10 shadow-sm">
          <div className="bg-white/85 px-5 py-5 sm:px-7 flex items-center gap-4">
            <span className="font-serif-title text-4xl font-bold text-[#5A4A7F]">30+</span>
            <span className="text-xs leading-relaxed text-[#2A2833]/70">años dedicados a educar y acompañar</span>
          </div>
          <div className="bg-white/85 px-5 py-5 sm:px-7 flex items-center gap-4">
            <span className="font-serif-title text-4xl font-bold text-[#3F6B58]">3</span>
            <span className="text-xs leading-relaxed text-[#2A2833]/70">países que forman parte de su trayectoria</span>
          </div>
          <div className="bg-white/85 px-5 py-5 sm:px-7 flex items-center gap-4">
            <span className="font-serif-title text-4xl font-bold text-[#2A2833]">2</span>
            <span className="text-xs leading-relaxed text-[#2A2833]/70">áreas de trabajo: docencia y orientación</span>
          </div>
        </div>
      </div>
    </section>
  );
};
