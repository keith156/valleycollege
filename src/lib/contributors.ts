import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface Contributor {
  id: string;
  name: string;
  amount: number; // Amount in UGX
  date: string;   // e.g., "May 2026"
}

export async function getContributors(): Promise<Contributor[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "contributors"));
    const contributors: Contributor[] = [];
    querySnapshot.forEach((docSnap) => {
      contributors.push({ ...docSnap.data(), id: docSnap.id } as Contributor);
    });
    return contributors.sort((a, b) => b.amount - a.amount);
  } catch (e) {
    console.error("Error getting contributors: ", e);
    return [];
  }
}

export async function saveContributor(contributor: Contributor) {
  const { id, ...data } = contributor;
  await setDoc(doc(db, "contributors", id), data);
}

export async function deleteContributor(id: string) {
  await deleteDoc(doc(db, "contributors", id));
}
