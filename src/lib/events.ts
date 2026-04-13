export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
}

const STORAGE_KEY = 'valley_college_events';

const defaultEvents: SchoolEvent[] = [
  { id: '1', title: 'Beginning of Term I', date: 'Feb 5, 2026' },
  { id: '2', title: 'Mid-Term Examinations', date: 'Mar 15, 2026' },
  { id: '3', title: 'Annual Sports Gala', date: 'Apr 10, 2026' },
  { id: '4', title: 'End of Term I', date: 'May 8, 2026' },
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
