import React from 'react';
import { BookOpen, Calculator, CalendarCheck, Check, Compass, School, Users } from 'lucide-react';
import teachingEnvironmentImage from '../assets/images/teaching_environment_math_1793792997421.jpg';

interface TeachingSectionProps {
  onSelectBooking: (serviceId?: string) => void;
  onContactTeaching: () => void;
}

export const TeachingSection: React.FC<TeachingSectionProps> = ({ onSelectBooking, onContactTeaching }) => {
  const teachingPillars = [
    {
      title: 'Clases Particulares de Matemáticas',
      desc: 'Enseñanza estructurada para educación primaria y secundaria. Explicaciones paso a paso, ejercicios guiados y desmitificación de las dificultades matemáticas.',
      icon: Calculator,
      tags: ['Primaria & Secundaria', 'Modalidad Online y Presencial', 'Resolución de problemas'],
    },
    {
      title: 'Apoyo Académico & Hábitos de Estudio',
      desc: 'Técnicas de organización, comprensión de enunciados, autonomía en las tareas diarias y preparación sosegada de exámenes y controles.',
      icon: BookOpen,
      tags: ['Técnicas de estudio', 'Autonomía', 'Seguimiento continuo'],
    },
    {
      title: 'Planificación & Diseño Curricular',
      desc: 'Elaboración de planes de estudio adaptados al ritmo y estilo de aprendizaje de cada alumno, con evaluaciones formativas periódicas.',
      icon: CalendarCheck,
      tags: ['Diagnóstico inicial', 'Planes a medida', 'Informes a familias'],
    },
    {
      title: 'Gestión y Coordinación para Centros',
      desc: 'Experiencia acumulada en dirección de aula, relación con familias y coordinación pedagógica para colegios, academias y proyectos educativos.',
      icon: School,
      tags: ['Colegios', 'Academias', 'Centros formativos'],
    },
  ];

  return (
    <section id="docencia" className="py-20 md:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3F6B58]">
              <span>Área A</span>
              <span aria-hidden="true">·</span>
              <span>Docencia & Gestión Educativa</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2833] tracking-tight text-balance">
              Aprende Matemáticas sin miedo y recupera la confianza
            </h2>
            <p className="text-[#2A2833]/80 text-base sm:text-lg leading-relaxed">
              Si te cuesta entender, organizarte o mantener la motivación, trabajamos paso a paso hasta que vuelvas a sentir que puedes.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              onClick={() => onSelectBooking('matematicas-online')}
              className="px-5 py-3 text-sm font-semibold text-white bg-[#5A4A7F] hover:bg-[#483968] active:scale-[0.98] rounded-xl shadow-xs transition-all text-center whitespace-nowrap"
            >
              Solicitar clase de Matemáticas
            </button>
            <button
              onClick={onContactTeaching}
              className="px-5 py-3 text-sm font-semibold text-[#3F6B58] bg-[#DCEAE2] hover:bg-[#cde0d5] rounded-xl transition-all text-center whitespace-nowrap"
            >
              Contactar para oportunidades docentes
            </button>
          </div>
        </div>

        {/* Feature Banner with Environment Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-[2rem] p-6 sm:p-8 border border-white shadow-lift overflow-hidden relative">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold text-[#5A4A7F] uppercase tracking-wider">
              Enfoque metodológico comprobado
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2A2833]">
              Acompañamiento docente individualizado y colaboración institucional
            </h3>
            <p className="text-sm text-[#2A2833]/80 leading-relaxed">
              Mi metodología combina la paciencia didáctica con la claridad conceptual. Cada estudiante avanza comprendiendo el porqué de cada procedimiento matemático, superando bloqueos emocionales frente a la asignatura y adquiriendo una base firme para cursos superiores.
            </p>

            {/* Presencial in Illescas badge notice */}
            <div className="p-4 bg-[#F1EAE0]/70 rounded-xl border border-[#2A2833]/10 space-y-1">
              <span className="text-xs font-bold text-[#3F6B58] flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#3F6B58]" />
                Presencial en Illescas, Toledo y comarca de La Sagra
              </span>
              <p className="text-xs text-[#2A2833]/75 leading-relaxed">
                Disponible para clases particulares presenciales y para valorar incorporaciones y colaboraciones docentes con colegios, institutos y academias de la zona de Illescas y comarca de La Sagra.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#2A2833]/70 font-medium">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#3F6B58]" /> Clases online para cualquier localidad
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#3F6B58]" /> Presencial en Illescas (Toledo)
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden border border-[#2A2833]/10">
            <img
              src={teachingEnvironmentImage}
              alt="Mesa de estudio y material didáctico para docencia de matemáticas"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] font-medium text-[#2A2833] border border-[#2A2833]/10">
              Didáctica matemática activa y comprensiva
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachingPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#2A2833]/8 shadow-sm flex flex-col justify-between hover:border-[#3F6B58]/40 hover:-translate-y-1 hover:shadow-lift transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#DCEAE2]/60 text-[#3F6B58] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-title text-xl font-bold text-[#2A2833]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#2A2833]/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2A2833]/5 flex flex-wrap gap-1 text-[11px] text-[#3F6B58] font-medium">
                  {pillar.tags.map((t, i) => (
                    <span key={i} className="after:content-['·'] after:ml-1 last:after:content-none">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
