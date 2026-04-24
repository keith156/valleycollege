export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
}

const STORAGE_KEY = 'valley_college_events_term2_v4';

const defaultEvents: SchoolEvent[] = [
  { id: '1', title: 'Opening of the Term', date: 'May 25, 2026' },
  { id: '2', title: 'Parent Teachers Meeting', date: 'Jun 10, 2026' },
  { id: '3', title: 'Visitation Day', date: 'Jul 11, 2026' },
  { id: '4', title: 'Term Closing', date: 'Aug 22, 2026' },
];

export function getEvents(): SchoolEvent[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse events from local storage', e);
    }
  }
  // Initialize with default events if none exist
  saveEvents(defaultEvents);
  return defaultEvents;
}

export function saveEvents(events: SchoolEvent[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}
