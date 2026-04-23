export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
}

const STORAGE_KEY = 'valley_college_events_term2';

const defaultEvents: SchoolEvent[] = [
  { id: '1', title: 'Opening of the Term', date: 'May 5, 2026' },
  { id: '2', title: 'Visiting Day (VD)', date: 'Jun 18, 2026' },
  { id: '3', title: 'Term Closing', date: 'Jul 24, 2026' },
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
