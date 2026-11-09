import React, { useState } from 'react';
import { Menu, X, Settings, Sparkles, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  onOpenCv: () => void;
  onSelectBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin, onOpenCv, onSelectBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#docencia' },
    { label: 'Acompañamiento', href: '#orientacion' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/80 backdrop-blur-xl border-b border-white/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-[4.5rem]">
          {/* Zone 1: Brand Wordmark (Single text element, no clutter) */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0"
          >
            <span className="w-9 h-9 rounded-xl bg-[#5A4A7F] text-white flex items-center justify-center font-serif-title text-xl font-bold shadow-sm">LC</span>
            <span className="flex flex-col items-start">
            <span className="font-serif-title text-2xl sm:text-3xl font-semibold tracking-tight text-[#2A2833] group-hover:text-[#5A4A7F] transition-colors">
              Lizneida Cordero
            </span>
            <span className="text-[10px] font-semibold tracking-[.08em] uppercase text-[#3F6B58] -mt-1 hidden sm:block">
              Aprender a Desaprender
            </span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Single-line, clean, hover effect) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#2A2833]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#5A4A7F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#5A4A7F]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenCv}
              className="text-xs font-semibold px-2.5 py-1 text-[#3F6B58] bg-[#DCEAE2]/60 hover:bg-[#DCEAE2] rounded transition-colors whitespace-nowrap shrink-0"
              title="Consultar e imprimir Currículum Vitae"
            >
              Ver CV
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action + Admin Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectBooking('sesion-informativa')}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#5A4A7F] hover:bg-[#483968] active:scale-[0.98] rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E7E0F4]" />
              <span>Empieza aquí</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenAdmin}
              className="p-2 text-[#2A2833]/60 hover:text-[#5A4A7F] hover:bg-[#E7E0F4]/50 rounded-lg transition-colors"
              title="Panel de administración y gestión"
              aria-label="Abrir panel de administración"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#2A2833] hover:text-[#5A4A7F] focus:outline-hidden"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#2A2833]/10 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-base font-medium text-[#2A2833] hover:bg-[#E7E0F4]/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                className="flex-1 px-3 py-2 text-sm font-medium text-[#3F6B58] bg-[#DCEAE2] rounded-lg text-center"
              >
                Consultar CV Académico
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="px-3 py-2 text-sm font-medium text-[#5A4A7F] bg-[#E7E0F4] rounded-lg flex items-center justify-center gap-1.5"
              >
                <Settings className="w-4 h-4" />
                <span>Gestión</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
