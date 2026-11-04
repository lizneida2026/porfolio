import React, { useState, useEffect } from 'react';
import { ContactRequest, RateItem, SiteSettings } from '../types';
import {
  getSiteSettings,
  saveSiteSettings,
  getContactRequests,
  updateContactRequestStatus,
  deleteContactRequest,
  exportRequestsToCSV,
} from '../utils/storage';
import { DEFAULT_RATES, DEFAULT_SETTINGS } from '../data/professionalData';
import {
  X,
  Save,
  Trash2,
  Download,
  Upload,
  CheckCircle,
  Clock,
  RotateCcw,
  DollarSign,
  Image,
  Inbox,
  Phone,
  Mail,
  MessageSquare,
  Lock,
} from 'lucide-react';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSettingsUpdated: (newSettings: SiteSettings) => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  onSettingsUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<'tarifas' | 'foto' | 'solicitudes' | 'contacto'>('tarifas');
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [rates, setRates] = useState<RateItem[]>(DEFAULT_RATES);
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const currentSettings = getSiteSettings();
      setSettings(currentSettings);
      setRates(currentSettings.rates);
      setPhotoPreview(currentSettings.profilePhotoUrl);
      setRequests(getContactRequests());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRatePriceChange = (id: string, newPriceVal: string) => {
    setRates((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        if (newPriceVal.toLowerCase() === 'consultar') {
          return { ...r, price: 'consultar' };
        }
        const parsed = parseFloat(newPriceVal);
        return { ...r, price: isNaN(parsed) ? 0 : parsed };
      })
    );
  };

  const handleRateDescChange = (id: string, newDesc: string) => {
    setRates((prev) =>
      prev.map((r) => (r.id === id ? { ...r, description: newDesc } : r))
    );
  };

  const handleSaveRates = () => {
    const updated: SiteSettings = {
      ...settings,
      rates,
    };
    saveSiteSettings(updated);
    setSettings(updated);
    onSettingsUpdated(updated);
    showFeedback('¡Tarifas actualizadas correctamente!');
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = () => {
    const updated: SiteSettings = {
      ...settings,
      profilePhotoUrl: photoPreview,
    };
    saveSiteSettings(updated);
    setSettings(updated);
    onSettingsUpdated(updated);
    showFeedback('¡Fotografía profesional actualizada!');
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    const updated: SiteSettings = {
      ...settings,
      profilePhotoUrl: null,
    };
    saveSiteSettings(updated);
    setSettings(updated);
    onSettingsUpdated(updated);
    showFeedback('Se ha restablecido el espacio reservado para la fotografía.');
  };

  const handleSaveContactInfo = () => {
    saveSiteSettings(settings);
    onSettingsUpdated(settings);
    showFeedback('¡Información de contacto actualizada!');
  };

  const handleStatusChange = (id: string, newStatus: 'nueva' | 'atendida' | 'archivada') => {
    updateContactRequestStatus(id, newStatus);
    setRequests(getContactRequests());
  };

  const handleDeleteRequest = (id: string) => {
    if (confirm('¿Eliminar esta solicitud del buzón?')) {
      deleteContactRequest(id);
      setRequests(getContactRequests());
    }
  };

  const handleResetDefaults = () => {
    if (confirm('¿Deseas restablecer todas las tarifas y valores iniciales?')) {
      saveSiteSettings(DEFAULT_SETTINGS);
      setSettings(DEFAULT_SETTINGS);
      setRates(DEFAULT_SETTINGS.rates);
      setPhotoPreview(DEFAULT_SETTINGS.profilePhotoUrl);
      onSettingsUpdated(DEFAULT_SETTINGS);
      showFeedback('Configuración restablecida a los valores iniciales.');
    }
  };

  const showFeedback = (msg: string) => {
    setSaveFeedback(msg);
    setTimeout(() => setSaveFeedback(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl border border-[#2A2833]/15 flex flex-col">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#FAF6F0] border-b border-[#2A2833]/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#5A4A7F] text-white flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-title text-xl font-bold text-[#2A2833]">
                Panel de Gestión · Lizneida Cordero
              </h2>
              <p className="text-[11px] text-[#2A2833]/60">
                Administración de tarifas, fotografía oficial y buzón de consultas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#2A2833]/60 hover:text-[#2A2833] hover:bg-neutral-200/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-[#2A2833]/10 flex items-center gap-4 bg-white text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('tarifas')}
            className={`py-3.5 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'tarifas'
                ? 'border-[#5A4A7F] text-[#5A4A7F]'
                : 'border-transparent text-[#2A2833]/60 hover:text-[#2A2833]'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Editar Tarifas</span>
          </button>

          <button
            onClick={() => setActiveTab('foto')}
            className={`py-3.5 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'foto'
                ? 'border-[#5A4A7F] text-[#5A4A7F]'
                : 'border-transparent text-[#2A2833]/60 hover:text-[#2A2833]'
            }`}
          >
            <Image className="w-4 h-4" />
            <span>Fotografía Oficial</span>
          </button>

          <button
            onClick={() => setActiveTab('solicitudes')}
            className={`py-3.5 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'solicitudes'
                ? 'border-[#5A4A7F] text-[#5A4A7F]'
                : 'border-transparent text-[#2A2833]/60 hover:text-[#2A2833]'
            }`}
          >
            <Inbox className="w-4 h-4" />
            <span>Buzón de Solicitudes ({requests.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('contacto')}
            className={`py-3.5 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'contacto'
                ? 'border-[#5A4A7F] text-[#5A4A7F]'
                : 'border-transparent text-[#2A2833]/60 hover:text-[#2A2833]'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Datos de Contacto</span>
          </button>
        </div>

        {/* Feedback Alert */}
        {saveFeedback && (
          <div className="bg-[#DCEAE2] px-6 py-2.5 text-xs font-semibold text-[#3F6B58] flex items-center gap-2 border-b border-[#3F6B58]/20 animate-in fade-in">
            <CheckCircle className="w-4 h-4" />
            <span>{saveFeedback}</span>
          </div>
        )}

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: TARIFAS */}
          {activeTab === 'tarifas' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#2A2833]">
                    Gestión de Precios Orientativos
                  </h3>
                  <p className="text-xs text-[#2A2833]/60">
                    Modifica los importes o descripciones de tus servicios. Los cambios se reflejarán de inmediato en la web.
                  </p>
                </div>
                <button
                  onClick={handleResetDefaults}
                  className="text-xs text-[#2A2833]/60 hover:text-rose-600 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restablecer iniciales</span>
                </button>
              </div>

              <div className="space-y-4">
                {rates.map((rate) => (
                  <div
                    key={rate.id}
                    className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#2A2833]/10 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="font-serif-title font-bold text-base text-[#2A2833]">
                        {rate.name}
                        <span className="ml-2 text-xs font-sans font-normal text-[#2A2833]/60">
                          ({rate.duration})
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="text-xs font-medium text-[#2A2833]/70">Precio (€):</label>
                        <input
                          type="text"
                          value={rate.price === 'consultar' ? 'consultar' : rate.price}
                          onChange={(e) => handleRatePriceChange(rate.id, e.target.value)}
                          className="w-24 text-xs font-mono font-bold bg-white border border-[#2A2833]/15 rounded-lg px-2.5 py-1 text-center"
                        />
                        <span className="text-xs text-[#2A2833]/60">/ {rate.unit}</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-[#2A2833]/60 block mb-1">
                        Descripción mostrada en la web
                      </label>
                      <input
                        type="text"
                        value={rate.description}
                        onChange={(e) => handleRateDescChange(rate.id, e.target.value)}
                        className="w-full text-xs bg-white border border-[#2A2833]/15 rounded-lg p-2"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleSaveRates}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#5A4A7F] hover:bg-[#483968] rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Guardar cambios de tarifas</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: FOTOGRAFÍA OFICIAL */}
          {activeTab === 'foto' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif-title text-xl font-bold text-[#2A2833]">
                  Fotografía Profesional Oficial
                </h3>
                <p className="text-xs text-[#2A2833]/60 mt-1">
                  Tal como solicitaste, actualmente la web muestra un espacio reservado elegante con tu monograma. Cuando tengas tu fotografía oficial lista, puedes subirla aquí para que aparezca en el Hero y en el perfil.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#FAF6F0] p-6 rounded-2xl border border-[#2A2833]/10">
                
                {/* Preview Box */}
                <div className="flex flex-col items-center">
                  <span className="text-xs font-semibold text-[#2A2833]/70 mb-3">
                    Vista previa actual
                  </span>
                  <div className="w-56 aspect-4/5 rounded-2xl overflow-hidden bg-white border border-[#2A2833]/10 shadow-sm flex items-center justify-center">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Previsualización de fotografía profesional"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center p-4 space-y-2">
                        <div className="w-16 h-16 rounded-full bg-[#5A4A7F] text-white flex items-center justify-center font-serif-title text-2xl mx-auto">
                          LC
                        </div>
                        <p className="text-[11px] font-medium text-[#2A2833]/60">
                          Espacio reservado oficial (sin foto cargada)
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Upload Controls */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2A2833] block">
                      Seleccionar archivo de imagen (JPG / PNG):
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="text-xs text-[#2A2833] file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#5A4A7F] file:text-white hover:file:bg-[#483968] cursor-pointer"
                    />
                    <p className="text-[11px] text-[#2A2833]/60">
                      Recomendado: retrato vertical nítido con buena iluminación natural.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      onClick={handleSavePhoto}
                      disabled={!photoPreview}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#3F6B58] hover:bg-[#325646] disabled:opacity-50 rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      <Save className="w-4 h-4" />
                      <span>Guardar como foto oficial</span>
                    </button>

                    {photoPreview && (
                      <button
                        onClick={handleRemovePhoto}
                        className="px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 rounded-xl transition-colors flex items-center gap-1.5"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Volver al espacio reservado</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: BUZÓN DE SOLICITUDES */}
          {activeTab === 'solicitudes' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#2A2833]">
                    Buzón de Consultas y Citas Recibidas
                  </h3>
                  <p className="text-xs text-[#2A2833]/60">
                    Mensajes enviados por usuarios a través del formulario de la web.
                  </p>
                </div>

                {requests.length > 0 && (
                  <button
                    onClick={() => exportRequestsToCSV(requests)}
                    className="px-3.5 py-2 text-xs font-semibold text-[#3F6B58] bg-[#DCEAE2] hover:bg-[#cbe0d3] rounded-xl flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Exportar a CSV / Excel</span>
                  </button>
                )}
              </div>

              {requests.length === 0 ? (
                <div className="text-center py-12 bg-[#FAF6F0] rounded-2xl border border-[#2A2833]/10 space-y-2">
                  <Inbox className="w-8 h-8 text-[#2A2833]/30 mx-auto" />
                  <p className="text-sm font-medium text-[#2A2833]/70">
                    No hay solicitudes pendientes en el buzón.
                  </p>
                  <p className="text-xs text-[#2A2833]/50">
                    Cuando un visitante complete el formulario de contacto, aparecerá aquí al instante.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {requests.map((req) => (
                    <div
                      key={req.id}
                      className="p-5 bg-white rounded-2xl border border-[#2A2833]/10 shadow-xs space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2A2833]/5 pb-3">
                        <div>
                          <span className="font-serif-title text-lg font-bold text-[#2A2833] block">
                            {req.fullName}
                          </span>
                          <div className="flex items-center gap-2 text-xs text-[#2A2833]/60 mt-0.5">
                            <span>{req.email}</span>
                            {req.phone && <span>· Tel: {req.phone}</span>}
                            <span>· {new Date(req.createdAt).toLocaleDateString('es-ES')}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <select
                            value={req.status}
                            onChange={(e) =>
                              handleStatusChange(
                                req.id,
                                e.target.value as 'nueva' | 'atendida' | 'archivada'
                              )
                            }
                            className={`text-xs font-semibold rounded-lg px-2.5 py-1 border ${
                              req.status === 'nueva'
                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                : req.status === 'atendida'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : 'bg-neutral-100 text-neutral-600 border-neutral-200'
                            }`}
                          >
                            <option value="nueva">Nueva</option>
                            <option value="atendida">Atendida</option>
                            <option value="archivada">Archivada</option>
                          </select>

                          <button
                            onClick={() => handleDeleteRequest(req.id)}
                            className="p-1 text-rose-500 hover:bg-rose-50 rounded-md"
                            title="Eliminar solicitud"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2A2833]/80 bg-[#FAF6F0] p-3 rounded-xl">
                        <div>
                          <strong>Servicio:</strong> {req.serviceId}
                        </div>
                        <div>
                          <strong>Modalidad:</strong> {req.modality === 'online' ? 'Online' : 'Presencial en Illescas'}
                        </div>
                        <div className="col-span-2">
                          <strong>Franja preferida:</strong> {req.preferredTime}
                        </div>
                        {req.message && (
                          <div className="col-span-2 pt-1 border-t border-[#2A2833]/5 text-[#2A2833]">
                            <strong>Mensaje:</strong> «{req.message}»
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <a
                          href={`mailto:${req.email}?subject=Respuesta%20a%20tu%20consulta%20-%20Lizneida%20Cordero`}
                          className="px-3 py-1.5 text-xs font-medium text-[#5A4A7F] bg-[#E7E0F4] hover:bg-[#d8cde9] rounded-lg transition-colors flex items-center gap-1"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Responder por Email</span>
                        </a>

                        {req.phone && (
                          <a
                            href={`https://wa.me/${req.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-medium text-[#3F6B58] bg-[#DCEAE2] hover:bg-[#cbe0d3] rounded-lg transition-colors flex items-center gap-1"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Abrir WhatsApp</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: DATOS DE CONTACTO */}
          {activeTab === 'contacto' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif-title text-xl font-bold text-[#2A2833]">
                  Información de Contacto y Ubicación
                </h3>
                <p className="text-xs text-[#2A2833]/60 mt-1">
                  Actualiza tus datos de referencia para que los visitantes se comuniquen contigo.
                </p>
              </div>

              <div className="space-y-4 max-w-xl">
                <div>
                  <label className="text-xs font-semibold text-[#2A2833] block mb-1">
                    Correo electrónico profesional
                  </label>
                  <input
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) =>
                      setSettings({ ...settings, contactEmail: e.target.value })
                    }
                    className="w-full text-xs bg-[#FAF6F0] border border-[#2A2833]/15 rounded-xl p-2.5"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#2A2833] block mb-1">
                    Número de WhatsApp (con código de país, ej. 34600000000)
                  </label>
                  <input
                    type="text"
                    value={settings.whatsappNumber}
                    onChange={(e) =>
                      setSettings({ ...settings, whatsappNumber: e.target.value })
                    }
                    className="w-full text-xs bg-[#FAF6F0] border border-[#2A2833]/15 rounded-xl p-2.5 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#2A2833] block mb-1">
                    Texto de ubicación
                  </label>
                  <input
                    type="text"
                    value={settings.locationText}
                    onChange={(e) =>
                      setSettings({ ...settings, locationText: e.target.value })
                    }
                    className="w-full text-xs bg-[#FAF6F0] border border-[#2A2833]/15 rounded-xl p-2.5"
                  />
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleSaveContactInfo}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#5A4A7F] hover:bg-[#483968] rounded-xl flex items-center gap-1.5 transition-colors"
                  >
                    <Save className="w-4 h-4" />
                    <span>Guardar datos de contacto</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Status */}
        <div className="px-6 py-3 bg-[#FAF6F0] border-t border-[#2A2833]/10 flex items-center justify-between text-[11px] text-[#2A2833]/60">
          <span>Cambios guardados localmente para mayor agilidad y privacidad</span>
          <button
            onClick={onClose}
            className="font-semibold text-[#5A4A7F] hover:underline"
          >
            Cerrar panel
          </button>
        </div>

      </div>
    </div>
  );
};
