import React from 'react';
import { PROFESSIONAL_IDENTITY, EDUCATION_LIST, EXPERIENCE_LIST, CORE_SKILLS, LANGUAGES } from '../data/professionalData';
import { X, Printer, Download, MapPin, Mail, Award, Briefcase, BookOpen, Check } from 'lucide-react';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      
      {/* Modal card */}
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-[#2A2833]/15 flex flex-col relative animate-in fade-in zoom-in-95 duration-150">
        
        {/* Sticky top actions bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#2A2833]/10 flex items-center justify-between z-10 no-print">
          <div className="flex items-center gap-2">
            <span className="font-serif-title text-lg font-bold text-[#2A2833]">
              Currículum Vitae Académico & Profesional
            </span>
            <span className="text-xs text-[#3F6B58] bg-[#DCEAE2] px-2 py-0.5 rounded font-medium hidden sm:inline">
              Documento Oficial
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#5A4A7F] hover:bg-[#483968] rounded-lg transition-colors flex items-center gap-1.5"
              title="Imprimir o guardar como PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#2A2833]/60 hover:text-[#2A2833] hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable Body */}
        <div className="p-6 sm:p-10 space-y-8 text-[#2A2833]">
          
          {/* Header */}
          <div className="border-b border-[#2A2833]/15 pb-6 space-y-2">
            <h1 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-[#2A2833]">
              {PROFESSIONAL_IDENTITY.fullName}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-[#5A4A7F]">
              Profesora de Matemáticas · Magíster en Ciencias, mención Orientación de la Conducta
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#2A2833]/70">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#3F6B58]" />
                {PROFESSIONAL_IDENTITY.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#5A4A7F]" />
                {PROFESSIONAL_IDENTITY.email}
              </span>
              <span>·</span>
              <span>Modalidad Online & Presencial</span>
            </div>
          </div>

          {/* Perfil Profesional */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3F6B58]">
              Perfil Profesional
            </h2>
            <p className="text-xs sm:text-sm text-[#2A2833]/85 leading-relaxed">
              Profesional de la educación y el acompañamiento humano con más de 20 años de experiencia acumulada en docencia de Matemáticas, orientación conductual y atención infantil y escolar en Venezuela, República Dominicana y Estados Unidos. Formada con doble titulación de educación superior (Profesorado en Matemáticas por la UPEL y Maestría en Ciencias por el C.I.P.P.S.V.). Capacidad demostrada en pedagogía constructiva, comunicación empática con familias, coordinación docente y adaptación a entornos multiculturales.
            </p>
          </div>

          {/* Formación Académica */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#5A4A7F] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Formación Académica Superior</span>
            </h2>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-[#5A4A7F] pl-4 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-[#2A2833]">
                    <span className="text-sm font-serif-title">{edu.degree}</span>
                    <span className="font-mono text-[#5A4A7F]">{edu.year}</span>
                  </div>
                  <p className="text-xs text-[#2A2833]/70">
                    {edu.institution} — {edu.location}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-[#2A2833]/80 leading-relaxed pt-0.5">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experiencia Profesional */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3F6B58] flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Experiencia Profesional & Trayectoria</span>
            </h2>

            <div className="space-y-5">
              {EXPERIENCE_LIST.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#3F6B58] pl-4 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#2A2833]">
                    <span className="text-sm font-serif-title">{exp.role}</span>
                    <span className="text-[#3F6B58]">{exp.location} ({exp.country})</span>
                  </div>
                  <p className="text-xs font-medium text-[#5A4A7F]">{exp.institution}</p>
                  <p className="text-xs text-[#2A2833]/80 leading-relaxed">{exp.description}</p>
                  <ul className="pt-1 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-[11px] text-[#2A2833]/70 flex items-start gap-1.5">
                        <span className="text-[#3F6B58]">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Competencias Clave & Idiomas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#2A2833]/10">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#2A2833]/70">
                Competencias Principales
              </h2>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-[#2A2833]/80">
                {CORE_SKILLS.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#3F6B58]" />
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#2A2833]/70">
                Idiomas
              </h2>
              <div className="space-y-2 text-xs text-[#2A2833]/80">
                {LANGUAGES.map((l, idx) => (
                  <div key={idx} className="p-2.5 bg-[#FAF6F0] rounded-xl border border-[#2A2833]/5">
                    <div className="flex justify-between font-semibold text-[#2A2833]">
                      <span>{l.name}</span>
                      <span className="text-[#5A4A7F]">{l.level}</span>
                    </div>
                    <span className="text-[11px] text-[#2A2833]/60">{l.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note in CV */}
          <div className="pt-4 border-t border-[#2A2833]/10 text-[11px] text-[#2A2833]/60 text-center italic">
            Documento curricular actualizado. Referencias acreditativas y títulos disponibles para su compulsa oficial.
          </div>

        </div>

      </div>
    </div>
  );
};
