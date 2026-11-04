import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TeachingSection } from './components/TeachingSection';
import { CounselingSection } from './components/CounselingSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { CurriculumModal } from './components/CurriculumModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { Footer } from './components/Footer';
import { getSiteSettings } from './utils/storage';
import { SiteSettings } from './types';
import { DEFAULT_SETTINGS } from './data/professionalData';

export default function App() {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    // Load persisted settings (rates, photo, etc.) from storage
    const stored = getSiteSettings();
    setSettings(stored);
  }, []);

  const handleSelectBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedServiceId(serviceId);
    }
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactTeaching = () => {
    setPreselectedServiceId('talleres-centros');
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSettingsUpdated = (newSettings: SiteSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2A2833] flex flex-col font-sans selection:bg-[#E7E0F4] selection:text-[#5A4A7F]">
      
      {/* 3-Zone Top Navigation */}
      <Header
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
        onSelectBooking={handleSelectBooking}
      />

      <main className="flex-1">
        {/* 1. Hero / Presentation */}
        <Hero
          profilePhotoUrl={settings.profilePhotoUrl}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onSelectBooking={handleSelectBooking}
        />

        {/* 2. Sobre Mí & Trayectoria Internacional */}
        <AboutSection onOpenCv={() => setIsCvOpen(true)} />

        {/* 3. Área A: Docencia & Gestión Educativa (Matemáticas) */}
        <TeachingSection
          onSelectBooking={handleSelectBooking}
          onContactTeaching={handleContactTeaching}
        />

        {/* 4. Área B: Orientación de la Conducta (Magíster CIPPSV) */}
        <CounselingSection onSelectBooking={handleSelectBooking} />

        {/* 5. Tarifas Orientativas & Calculadora */}
        <PricingSection
          rates={settings.rates}
          onSelectBooking={handleSelectBooking}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 6. Formulario de Contacto y Reserva Directa */}
        <ContactSection
          rates={settings.rates}
          preselectedServiceId={preselectedServiceId}
          onClearPreselection={() => setPreselectedServiceId(null)}
        />

        {/* 7. Preguntas Frecuentes */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Curriculum Vitae Full Printable View */}
      <CurriculumModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      {/* Admin Panel for Lizneida (Rates, Photo, Inquiries) */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onSettingsUpdated={handleSettingsUpdated}
      />

    </div>
  );
}
