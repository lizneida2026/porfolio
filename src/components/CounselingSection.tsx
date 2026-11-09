import React from 'react';
import { Heart, ShieldCheck, Sparkles, UserCheck, Users, Sun, Compass, Brain, Feather, ArrowRight } from 'lucide-react';

interface CounselingSectionProps {
  onSelectBooking: (serviceId?: string) => void;
}

export const CounselingSection: React.FC<CounselingSectionProps> = ({ onSelectBooking }) => {
  const counselingAreas = [
    {
      title: 'Desarrollo Personal & Autoconocimiento',
      desc: 'Clarificación de valores, toma de decisiones conscientes y despliegue de las propias fortalezas individuales.',
      icon: Sparkles,
    },
    {
      title: 'Autoestima & Seguridad Personal',
      desc: 'Reconciliación con la propia valía, superación del diálogo interno crítico y consolidación de la autoconfianza.',
      icon: Heart,
    },
    {
      title: 'Manejo del Estrés Cotidiano',
      desc: 'Estrategias conductuales para la autorregulación emocional, descompresión del ritmo diario y prevención del agotamiento.',
      icon: Sun,
    },
    {
      title: 'Hábitos Saludables & Rutinas',
      desc: 'Instauración gradual de hábitos constructivos, higiene del descanso, equilibrio vital y sostenibilidad en el tiempo.',
      icon: Compass,
    },
    {
      title: 'Motivación & Organización Personal',
      desc: 'Definición de objetivos realistas, superación de la procrastinación y planificación estructurada del día a día.',
      icon: Brain,
    },
    {
      title: 'Duelo & Procesos de Adaptación',
      desc: 'Acompañamiento respetuoso ante pérdidas afectivas, cambios de etapa vital, adaptaciones migratorias y transiciones complejas.',
      icon: Feather,
    },
    {
      title: 'Orientación Familiar & Educativa',
      desc: 'Pautas de crianza positiva, comunicación intrafamiliar no violenta y mediación ante dificultades escolares o de convivencia.',
      icon: Users,
    },
    {
      title: 'Acompañamiento a Adultos',
      desc: 'Espacio de escucha atenta, cálida y confidencial para adultos que buscan reordenar sus prioridades o atravesar un momento de duda.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="orientacion" className="py-20 md:py-28 bg-gradient-to-br from-[#2A2833] via-[#3d3153] to-[#5A4A7F] text-[#FAF6F0] border-t border-[#2A2833]/8 relative overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#bca4e9]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A4A7F]">
              <span>Área B</span>
              <span aria-hidden="true">·</span>
              <span>Orientación de la Conducta & Acompañamiento Personal</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
              Deja de sobrevivir en automático. Empieza a comprenderte.
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed">
              Cuando sabes qué te bloquea, puedes empezar a elegir de otra manera. Te acompaño a ordenar emociones, hábitos y decisiones con pasos concretos.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 justify-end">
            <button
              onClick={() => onSelectBooking('orientacion-individual-online')}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-[#5A4A7F] hover:bg-[#483968] active:scale-[0.98] rounded-xl shadow-xs transition-all text-center whitespace-nowrap"
            >
              Solicitar orientación
            </button>
            <button
              onClick={() => onSelectBooking('sesion-informativa')}
              className="px-6 py-3 text-xs font-semibold text-[#5A4A7F] bg-[#E7E0F4] hover:bg-[#d8cde9] rounded-xl transition-all text-center whitespace-nowrap"
            >
              Primera conversación informativa (15 min sin coste)
            </button>
          </div>
        </div>

        {/* Hero split with counseling room environment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/95 text-[#2A2833] rounded-[2rem] p-6 sm:p-8 border border-white/20 shadow-lift-lg">
          
          <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden border border-[#2A2833]/10 order-2 lg:order-1">
            <img
              src="/src/assets/images/counseling_space_warm_1793792997156.jpg"
              alt="Ambiente acogedor y sereno de orientación y consulta personal"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] font-medium text-[#2A2833] border border-[#2A2833]/10">
              Escucha activa, confidencialidad y respeto
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <span className="text-xs font-semibold text-[#3F6B58] uppercase tracking-wider">
              Modalidad Principal Online
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2A2833]">
              Sesiones personalizadas desde la comodidad de tu hogar
            </h3>
            <p className="text-sm text-[#2A2833]/80 leading-relaxed">
              La orientación online elimina barreras geográficas y desplazamientos, brindándote un espacio íntimo y regular donde hablar con tranquilidad. Cada sesión de 50 minutos se enfoca en objetivos concretos y prácticos aplicables a tu vida real.
            </p>

            {/* Strict Ethical Disclaimer Box (as required by prompt) */}
            <div className="p-4 bg-[#F1EAE0] rounded-xl border border-[#2A2833]/15 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#5A4A7F]">
                <ShieldCheck className="w-4 h-4 text-[#5A4A7F]" />
                <span>Deslinde profesional & Marco ético</span>
              </div>
              <p className="text-xs text-[#2A2833]/85 leading-relaxed">
                Los servicios aquí ofrecidos corresponden a orientación pedagógica y conductual para el desarrollo personal y familiar. <strong>No constituyen diagnóstico clínico, psicoterapia sanitaria, psiquiatría ni tratamiento médico</strong>. En caso de requerirse intervención clínica o médica, se recomendará la derivación al profesional de la salud pertinente.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#2A2833]/70">
              <span>Orientación individual · 50 min · 30 €</span>
              <button
                onClick={() => onSelectBooking('orientacion-individual-online')}
                className="font-semibold text-[#5A4A7F] hover:underline flex items-center gap-1"
              >
                <span>Reservar sesión</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* 8 Areas Bento Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title text-2xl font-bold text-white">
              Áreas de Intervención y Acompañamiento
            </h3>
            <span className="text-xs text-white/60">Sesiones adaptadas a cada necesidad</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {counselingAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/95 text-[#2A2833] rounded-2xl p-5 border border-white/15 shadow-sm flex flex-col justify-between hover:border-[#E7E0F4] transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E7E0F4] text-[#5A4A7F] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif-title text-lg font-bold text-[#2A2833] leading-snug">
                      {area.title}
                    </h4>
                    <p className="text-xs text-[#2A2833]/75 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#2A2833]/5">
                    <button
                      onClick={() => onSelectBooking('orientacion-individual-online')}
                      className="text-[11px] font-semibold text-[#5A4A7F] hover:text-[#483968] flex items-center gap-1"
                    >
                      <span>Consultar esta área</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
