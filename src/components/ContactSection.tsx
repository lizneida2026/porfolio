import React, { useState, useEffect } from 'react';
import { RateItem } from '../types';
import { saveContactRequest } from '../utils/storage';
import { PROFESSIONAL_IDENTITY } from '../data/professionalData';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  rates: RateItem[];
  preselectedServiceId: string | null;
  onClearPreselection: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  rates,
  preselectedServiceId,
  onClearPreselection,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState<string>('sesion-informativa');
  const [modality, setModality] = useState<'online' | 'presencial_illescas'>('online');
  const [preferredTime, setPreferredTime] = useState('Tardes (16:00 a 20:00)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync preselected service from other sections
  useEffect(() => {
    if (preselectedServiceId) {
      setServiceId(preselectedServiceId);
      if (preselectedServiceId === 'matematicas-presencial') {
        setModality('presencial_illescas');
      }
    }
  }, [preselectedServiceId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim() || !email.trim()) {
      setError('Por favor, indica tu nombre y correo electrónico de contacto.');
      return;
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, introduce una dirección de correo electrónico válida.');
      return;
    }

    saveContactRequest({
      fullName,
      email,
      phone,
      serviceId,
      modality,
      preferredTime,
      message,
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    onClearPreselection();
  };

  // Pre-formatted WhatsApp link
  const selectedServiceName = rates.find((r) => r.id === serviceId)?.name || 'Consulta profesional';
  const whatsappText = encodeURIComponent(
    `Hola, Lizneida. Me pongo en contacto desde tu web profesional. Mi nombre es ${
      fullName || '[Nombre]'
    }. Me interesa solicitar información sobre: "${selectedServiceName}" (${
      modality === 'online' ? 'Modalidad Online' : 'Presencial en Illescas'
    }).`
  );
  const whatsappUrl = `https://wa.me/34600000000?text=${whatsappText}`;

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#F1EAE0]/70 border-t border-[#2A2833]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3F6B58]">
            <span>Contacto Directo</span>
            <span aria-hidden="true">·</span>
            <span>Atención cercana</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2833] tracking-tight text-balance">
            Demos el primer paso: solicita información o concierta tu sesión
          </h2>
          <p className="text-sm sm:text-base text-[#2A2833]/80 leading-relaxed">
            Puedes escribirme mediante el formulario, enviarme un correo electrónico o pulsar el botón de WhatsApp para una respuesta ágil. Estaré encantada de conocer tu caso y buscar la mejor solución.
          </p>
        </div>

        {/* Contact Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct channels & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="bg-[#2A2833] text-white rounded-[2rem] p-6 sm:p-7 border border-white/10 shadow-lift-lg space-y-6">
              <h3 className="font-serif-title text-2xl font-bold text-white">
                Canales de Comunicación
              </h3>

              <div className="space-y-4">
                {/* Email channel */}
                <a
                  href={`mailto:${PROFESSIONAL_IDENTITY.email}?subject=Consulta%20Web%20Profesional%20-%20Lizneida%20Cordero`}
                  className="p-4 rounded-2xl bg-[#FAF6F0] hover:bg-[#E7E0F4]/40 border border-[#2A2833]/5 transition-colors flex items-start gap-3.5 group block"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#5A4A7F] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5A4A7F] block">
                      Correo Electrónico
                    </span>
                    <span className="text-sm font-semibold text-[#2A2833] group-hover:text-[#5A4A7F] transition-colors break-all">
                      {PROFESSIONAL_IDENTITY.email}
                    </span>
                    <p className="text-xs text-[#2A2833]/60 mt-0.5">
                      Respuesta en menos de 24 horas laborables.
                    </p>
                  </div>
                </a>

                {/* WhatsApp channel */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#FAF6F0] hover:bg-[#DCEAE2]/50 border border-[#2A2833]/5 transition-colors flex items-start gap-3.5 group block"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3F6B58] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#3F6B58] block">
                      Mensaje directo por WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-[#2A2833] group-hover:text-[#3F6B58] transition-colors">
                      Escribir mensaje directo
                    </span>
                    <p className="text-xs text-[#2A2833]/60 mt-0.5">
                      Para consultas rápidas o dudas puntuales de horario.
                    </p>
                  </div>
                </a>

                {/* Location channel */}
                <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#2A2833]/5 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F1EAE0] text-[#2A2833] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2A2833]/70 block">
                      Ubicación de Referencia
                    </span>
                    <span className="text-sm font-semibold text-[#2A2833]">
                      Illescas, Toledo, España
                    </span>
                    <p className="text-xs text-[#2A2833]/60 mt-0.5">
                      Sesiones presenciales en la zona y servicio online universal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Free initial conversation highlight */}
              <div className="p-4 rounded-2xl bg-[#E7E0F4]/60 border border-[#5A4A7F]/20 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#5A4A7F]">
                  <Sparkles className="w-4 h-4" />
                  <span>Primera conversación (15 min) sin coste</span>
                </div>
                <p className="text-xs text-[#2A2833]/80 leading-relaxed">
                  ¿Dudas sobre si este servicio es el adecuado para ti o tu familia? Puedes solicitar una primera charla de 15 minutos sin ningún tipo de compromiso.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-white shadow-lift relative">
              
              {submitted ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#DCEAE2] text-[#3F6B58] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-title text-3xl font-bold text-[#2A2833]">
                    ¡Solicitud enviada con éxito!
                  </h3>
                  <p className="text-sm text-[#2A2833]/80 max-w-md mx-auto leading-relaxed">
                    Gracias, <strong>{fullName}</strong>. He recibido tu mensaje correctamente y me pondré en contacto contigo en breve en <strong>{email}</strong> para coordinar la fecha y hora de nuestra conversación.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold text-[#2A2833] bg-[#FAF6F0] hover:bg-[#F1EAE0] rounded-xl border border-[#2A2833]/10 transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#3F6B58] hover:bg-[#325646] rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Confirmar también por WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif-title text-2xl font-bold text-[#2A2833]">
                      Formulario de Solicitud y Contacto
                    </h3>
                    <p className="text-xs text-[#2A2833]/60 mt-1">
                      Completa los datos y te responderé a la mayor brevedad.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl">
                      {error}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#2A2833]/80 block mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. María García"
                        className="w-full text-sm bg-[#FAF6F0] border border-[#2A2833]/15 rounded-xl px-3.5 py-2.5 text-[#2A2833] focus:outline-hidden focus:ring-2 focus:ring-[#5A4A7F]/30"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#2A2833]/80 block mb-1">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ejemplo@correo.com"
                        className="w-full text-sm bg-[#FAF6F0] border border-[#2A2833]/15 rounded-xl px-3.5 py-2.5 text-[#2A2833] focus:outline-hidden focus:ring-2 focus:ring-[#5A4A7F]/30"
                      />
                    </div>
                  </div>

                  {/* Phone and Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#2A2833]/80 block mb-1">
                        Teléfono (opcional para WhatsApp)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. +34 600 000 000"
                        className="w-full text-sm bg-[#FAF6F0] border border-[#2A2833]/15 rounded-xl px-3.5 py-2.5 text-[#2A2833] focus:outline-hidden focus:ring-2 focus:ring-[#5A4A7F]/30"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#2A2833]/80 block mb-1">
                        Servicio de interés
                      </label>
                      <select
                        value={serviceId}
                        onChange={(e) => setServiceId(e.target.value)}
                        className="w-full text-sm bg-[#FAF6F0] border border-[#2A2833]/15 rounded-xl px-3.5 py-2.5 text-[#2A2833] focus:outline-hidden focus:ring-2 focus:ring-[#5A4A7F]/30"
                      >
                        {rates.map((rate) => (
                          <option key={rate.id} value={rate.id}>
                            {rate.name} {typeof rate.price === 'number' ? `(${rate.price === 0 ? 'Sin coste' : rate.price + ' €'})` : '(Presupuesto)'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Modality & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#2A2833]/80 block mb-1">
                        Modalidad preferida
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setModality('online')}
                          className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all ${
                            modality === 'online'
                              ? 'bg-[#5A4A7F] text-white border-[#5A4A7F]'
                              : 'bg-[#FAF6F0] text-[#2A2833] border-[#2A2833]/15 hover:bg-[#E7E0F4]'
                          }`}
                        >
                          Online
                        </button>
                        <button
                          type="button"
                          onClick={() => setModality('presencial_illescas')}
                          className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all ${
                            modality === 'presencial_illescas'
                              ? 'bg-[#3F6B58] text-white border-[#3F6B58]'
                              : 'bg-[#FAF6F0] text-[#2A2833] border-[#2A2833]/15 hover:bg-[#DCEAE2]'
                          }`}
                        >
                          Presencial (Illescas)
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#2A2833]/80 block mb-1">
                        Franja horaria preferida
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full text-sm bg-[#FAF6F0] border border-[#2A2833]/15 rounded-xl px-3.5 py-2.5 text-[#2A2833] focus:outline-hidden focus:ring-2 focus:ring-[#5A4A7F]/30"
                      >
                        <option value="Mañanas (09:00 a 13:00)">Mañanas (09:00 a 13:00)</option>
                        <option value="Mediodías (13:00 a 16:00)">Mediodías (13:00 a 16:00)</option>
                        <option value="Tardes (16:00 a 20:00)">Tardes (16:00 a 20:00)</option>
                        <option value="Flexible / A convenir">Flexible / A convenir</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-[#2A2833]/80 block mb-1">
                      Comentario o necesidad específica (opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Indica brevemente el curso del alumno, el motivo de orientación o la consulta que deseas plantear..."
                      className="w-full text-sm bg-[#FAF6F0] border border-[#2A2833]/15 rounded-xl p-3 text-[#2A2833] focus:outline-hidden focus:ring-2 focus:ring-[#5A4A7F]/30 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#5A4A7F] hover:bg-[#483968] active:scale-[0.99] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-[#E7E0F4]" />
                      <span>Enviar solicitud de información</span>
                    </button>
                    <p className="text-[11px] text-[#2A2833]/60 text-center mt-2.5">
                      Tus datos se gestionan con estricta confidencialidad para responder a tu consulta.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
