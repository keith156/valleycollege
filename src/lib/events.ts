import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
}

const defaultEvents: SchoolEvent[] = [
  { id: '1', title: 'Opening of the Term', date: 'May 25, 2026' },
  { id: '2', title: 'Parent Teachers Meeting', date: 'Jun 10, 2026' },
  { id: '3', title: 'Visitation Day', date: 'Jul 11, 2026' },
  { id: '4', title: 'Term Closing', date: 'Aug 22, 2026' },
];

export async function getEvents(): Promise<SchoolEvent[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));
    if (querySnapshot.empty) {
      // Initialize with defaults if empty
      for (const event of defaultEvents) {
        await saveEvent(event);
      }
      return defaultEvents;
    }
    const events: SchoolEvent[] = [];
    querySnapshot.forEach((doc) => {
      events.push({ ...doc.data(), id: doc.id } as SchoolEvent);
    });
    return events.sort((a, b) => a.date.localeCompare(b.date));
  } catch (e) {
    console.error("Error getting events: ", e);
    return defaultEvents;
  }
}

export async function saveEvent(event: SchoolEvent) {
  const { id, ...data } = event;
  await setDoc(doc(db, "events", id), data);
}

export async function deleteEvent(id: string) {
  await deleteDoc(doc(db, "events", id));
}
