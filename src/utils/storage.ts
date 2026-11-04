import { ContactRequest, SiteSettings } from '../types';
import { DEFAULT_SETTINGS } from '../data/professionalData';

const SETTINGS_KEY = 'lizneida_site_settings_v1';
const REQUESTS_KEY = 'lizneida_contact_requests_v1';

export function getSiteSettings(): SiteSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      rates: parsed.rates && parsed.rates.length > 0 ? parsed.rates : DEFAULT_SETTINGS.rates,
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSiteSettings(settings: SiteSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (err) {
    console.error('Error saving settings to localStorage', err);
  }
}

export function getContactRequests(): ContactRequest[] {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveContactRequest(request: Omit<ContactRequest, 'id' | 'createdAt' | 'status'>): ContactRequest {
  const current = getContactRequests();
  const newRequest: ContactRequest = {
    ...request,
    id: 'req_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    createdAt: new Date().toISOString(),
    status: 'nueva',
  };
  const updated = [newRequest, ...current];
  try {
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving contact request', err);
  }
  return newRequest;
}

export function updateContactRequestStatus(id: string, status: 'nueva' | 'atendida' | 'archivada'): void {
  const current = getContactRequests();
  const updated = current.map(item => (item.id === id ? { ...item, status } : item));
  try {
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error updating contact status', err);
  }
}

export function deleteContactRequest(id: string): void {
  const current = getContactRequests();
  const updated = current.filter(item => item.id !== id);
  try {
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error deleting contact request', err);
  }
}

export function exportRequestsToCSV(requests: ContactRequest[]): void {
  if (requests.length === 0) return;
  const headers = ['Fecha', 'Nombre', 'Email', 'Telefono', 'Servicio', 'Modalidad', 'Horario', 'Estado', 'Mensaje'];
  const rows = requests.map(r => [
    `"${new Date(r.createdAt).toLocaleString('es-ES')}"`,
    `"${(r.fullName || '').replace(/"/g, '""')}"`,
    `"${(r.email || '').replace(/"/g, '""')}"`,
    `"${(r.phone || '').replace(/"/g, '""')}"`,
    `"${(r.serviceId || '').replace(/"/g, '""')}"`,
    `"${r.modality === 'online' ? 'Online' : 'Presencial Illescas'}"`,
    `"${(r.preferredTime || '').replace(/"/g, '""')}"`,
    `"${r.status}"`,
    `"${(r.message || '').replace(/"/g, '""')}"`,
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `solicitudes_lizneida_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
