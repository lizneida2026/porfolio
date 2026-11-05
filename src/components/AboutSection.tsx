import React from 'react';
import { EDUCATION_LIST, EXPERIENCE_LIST, CORE_SKILLS, LANGUAGES } from '../data/professionalData';
import { Award, BookOpen, CheckCircle2, FileText, Globe, HeartHandshake, MapPin } from 'lucide-react';

interface AboutSectionProps {
  onOpenCv: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCv }) => {
  return (
    <section id="sobre-mi" className="py-20 md:py-28 bg-[#F1EAE0]/55 border-y border-[#2A2833]/8 relative overflow-hidden">
      <div className="absolute -right-28 top-24 w-80 h-80 rounded-full border-[32px] border-white/50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3F6B58]">
            <span>Sobre mí</span>
            <span aria-hidden="true">·</span>
            <span>Vocación, rigor pedagógico y cercanía</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2833] tracking-tight text-balance">
            Más de dos décadas impulsando el aprendizaje y el bienestar humano
          </h2>
          <p className="text-[#2A2833]/80 text-base sm:text-lg leading-relaxed">
            Mi carrera profesional se ha forjado en la intersección entre la precisión matemática, la didáctica escolar y la comprensión profunda de la conducta humana. He tenido el privilegio de educar y orientar a estudiantes, familias y equipos en Venezuela, República Dominicana y Estados Unidos, y hoy desarrollo mi actividad desde Illescas (Toledo), tanto de manera presencial como a través de la atención online.
          </p>
        </div>

        {/* International Journey Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif-title text-2xl font-bold text-[#2A2833] flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#5A4A7F]" />
              <span>Trayectoria Internacional</span>
            </h3>
            <span className="text-xs text-[#2A2833]/60 hidden sm:inline">Experiencia docente y socioeducativa</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCE_LIST.map((exp) => (
              <div
                key={exp.id}
                className="bg-white/90 rounded-2xl p-6 border border-white shadow-sm flex flex-col justify-between hover:border-[#5A4A7F]/40 hover:-translate-y-1 hover:shadow-lift transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#3F6B58] font-semibold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.country}
                    </span>
                    <span className="text-[#2A2833]/50 font-normal">{exp.location}</span>
                  </div>

                  <div>
                    <h4 className="font-serif-title text-lg font-bold text-[#2A2833] leading-snug">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-medium text-[#5A4A7F] mt-0.5">
                      {exp.institution}
                    </p>
                  </div>

                  <p className="text-xs text-[#2A2833]/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2A2833]/5 space-y-1.5">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#2A2833]/70">
                      <span className="text-[#3F6B58] font-bold shrink-0 mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Rigor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Degrees (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif-title text-2xl font-bold text-[#2A2833] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#3F6B58]" />
              <span>Formación Académica Homologada</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 rounded-2xl p-6 border border-white shadow-sm space-y-2 relative hover:-translate-y-1 hover:shadow-lift transition-all"
                >
                  <div className="flex items-center justify-between text-xs text-[#5A4A7F] font-semibold">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-[#2A2833]/60">{edu.year}</span>
                  </div>

                  <h4 className="font-serif-title text-xl font-bold text-[#2A2833]">
                    {edu.degree}
                  </h4>

                  <p className="text-xs text-[#3F6B58] flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </p>

                  {edu.details && (
                    <p className="text-xs text-[#2A2833]/80 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#DCEAE2]/40 rounded-xl border border-[#3F6B58]/20 flex items-center justify-between gap-4">
              <div className="text-xs text-[#2A2833]/90">
                <span className="font-semibold text-[#3F6B58] block">Compromiso ético y rigor técnico:</span>
                Toda la labor pedagógica y de orientación se ejerce en estricto apego a las titulaciones descritas, sin atribución de competencias clínicas no acreditadas.
              </div>
              <button
                onClick={onOpenCv}
                className="shrink-0 px-3.5 py-2 text-xs font-semibold text-[#3F6B58] bg-white hover:bg-[#DCEAE2] rounded-lg border border-[#3F6B58]/30 transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Ver CV completo</span>
              </button>
            </div>
          </div>

          {/* Right: Skills & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif-title text-2xl font-bold text-[#2A2833] flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-[#5A4A7F]" />
              <span>Competencias & Idiomas</span>
            </h3>

            {/* Competencies list */}
            <div className="bg-white/90 rounded-2xl p-6 border border-white shadow-sm space-y-3 hover:-translate-y-1 hover:shadow-lift transition-all">
              <span className="text-xs font-semibold text-[#2A2833]/60 uppercase tracking-wider block">
                Habilidades profesionales clave
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CORE_SKILLS.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#2A2833]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#3F6B58] shrink-0" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white/90 rounded-2xl p-6 border border-white shadow-sm space-y-3 hover:-translate-y-1 hover:shadow-lift transition-all">
              <span className="text-xs font-semibold text-[#2A2833]/60 uppercase tracking-wider block">
                Competencia lingüística
              </span>
              <div className="space-y-3">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-2 border-b border-[#2A2833]/5 last:border-0 last:pb-0">
                    <div>
                      <span className="font-medium text-sm text-[#2A2833] block">{lang.name}</span>
                      <span className="text-xs text-[#2A2833]/60">{lang.note}</span>
                    </div>
                    <span className="text-xs font-semibold text-[#5A4A7F] bg-[#E7E0F4]/60 px-2.5 py-1 rounded-md">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
