const STORAGE_KEY = 'vc_alumni_spotlight';

export interface SpotlightAlumnus {
  id: string;
  name: string;
  period: string;
  profession: string;
  workStation: string;
  imageUrl: string; // Any URL or base64 data URI
}

export function getSpotlight(): SpotlightAlumnus[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveSpotlight(data: SpotlightAlumnus[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
