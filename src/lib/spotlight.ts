import { collection, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase';

export interface SpotlightAlumnus {
  id: string;
  name: string;
  period: string;
  profession: string;
  workStation: string;
  imageUrl: string; // Any URL or base64 data URI
}

export async function getSpotlight(): Promise<SpotlightAlumnus[]> {
  try {
    const snapshot = await getDocs(collection(db, 'spotlight'));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as SpotlightAlumnus));
  } catch (err) {
    console.error("Error fetching spotlight data from Firebase:", err);
    return [];
  }
}

export async function saveSpotlight(data: SpotlightAlumnus[]): Promise<void> {
  try {
    // 1. Fetch existing first
    const existing = await getSpotlight();
    const existingIds = new Set(existing.map(s => s.id));
    
    // 2. Overwrite / insert new ones
    for (const item of data) {
      await setDoc(doc(db, 'spotlight', item.id), item);
      existingIds.delete(item.id);
    }
    
    // 3. Delete any that are no longer in the provided array
    for (const idToDelete of existingIds) {
      await deleteDoc(doc(db, 'spotlight', idToDelete));
    }
  } catch (err) {
    console.error("Error saving spotlight data to Firebase:", err);
  }
}

// Helper to upload base64 image to Firebase Storage and get back a public URL
export async function uploadSpotlightImage(id: string, base64Data: string): Promise<string> {
  if (!base64Data.startsWith('data:image')) return base64Data; // Not a base64, must be regular URL already
  
  const storageRef = ref(storage, `spotlight/${id}.jpg`);
  await uploadString(storageRef, base64Data, 'data_url');
  return await getDownloadURL(storageRef);
}
