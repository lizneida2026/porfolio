import React from 'react';
import { PROFESSIONAL_IDENTITY } from '../data/professionalData';
import { MapPin, Mail, Lock, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onOpenCv }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A2833] text-[#FAF6F0] pt-16 pb-12 border-t border-[#FAF6F0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif-title text-3xl font-bold tracking-tight text-white block">
              Aprender a Desaprender
            </span>
            <p className="text-xs sm:text-sm font-medium text-[#E7E0F4]/90">
              {PROFESSIONAL_IDENTITY.clinicName}
            </p>
            <p className="font-serif-title text-base italic text-[#DCEAE2]/90">
              {PROFESSIONAL_IDENTITY.motto}
            </p>
            <p className="text-xs text-[#FAF6F0]/70 leading-relaxed max-w-sm">
              Plataforma profesional orientada a la docencia matemática de calidad, la gestión escolar y el acompañamiento conductual para personas, familias y centros educativos.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#DCEAE2] block">
              Secciones
            </span>
            <ul className="space-y-2 text-xs text-[#FAF6F0]/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-white transition-colors">
                  Sobre mí & Trayectoria
                </a>
              </li>
              <li>
                <a href="#docencia" className="hover:text-white transition-colors">
                  Docencia en Matemáticas
                </a>
              </li>
              <li>
                <a href="#orientacion" className="hover:text-white transition-colors">
                  Orientación de la Conducta
                </a>
              </li>
              <li>
                <a href="#tarifas" className="hover:text-white transition-colors">
                  Tarifas Orientativas
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto & Reservas
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCv}
                  className="hover:text-[#DCEAE2] transition-colors text-left"
                >
                  Consultar CV Oficial
                </button>
              </li>
            </ul>
          </div>

          {/* Ethics & Legal Boundary (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E7E0F4] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#DCEAE2]" />
              <span>Aviso Ético & Transparencia</span>
            </span>
            <div className="p-4 bg-[#FAF6F0]/5 rounded-2xl border border-[#FAF6F0]/10 text-xs text-[#FAF6F0]/75 leading-relaxed space-y-2">
              <p>
                Los servicios de orientación se amparan en el título de <strong>Magíster en Ciencias, mención Orientación de la Conducta</strong> (C.I.P.P.S.V., 2009).
              </p>
              <p>
                No constituyen diagnóstico psiquiátrico, psicoterapia clínica ni asistencia médica sanitaria. Para cualquier patología clínica, se remitirá al servicio médico o psicológico colegiado competente.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#FAF6F0]/60 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#DCEAE2]" />
              <span>Illescas, Toledo, España · Atención Online</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#FAF6F0]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF6F0]/50">
          <div>
            © {currentYear} Lizneida Milagro Cordero Valero. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="text-[#FAF6F0]/60 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              title="Acceder al gestor de tarifas y fotografía"
            >
              <Lock className="w-3 h-3" />
              <span>Panel de Administración</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
