import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export interface StudentRecord {
  name: string;
  combo: string;
  pts: string;
}

export interface WallOfFameYear {
  id: string;
  year: string;
  students: StudentRecord[];
}

const defaultWof: WallOfFameYear[] = [
  {
    id: '1',
    year: "2025",
    students: [
      { name: "Ainonugisha Messiah Kiyimba", combo: "O-Level", pts: "3As 6Bs" },
      { name: "Musinguzi Edpa", combo: "O-Level", pts: "2As, 6Bs, 1C" }
    ]
  },
  {
    id: '2',
    year: "2024",
    students: [
      { name: "Kabupho Claire Ayebale", combo: "O-Level", pts: "3As, 6Bs" },
      { name: "Mazima Pretty Comfort", combo: "O-Level", pts: "3As, 5Bs, 1C" }
    ]
  },
  {
    id: '3',
    year: "2023",
    students: [
      { name: "Asiimwe Lucky", combo: "O-Level", pts: "9 Agg." },
      { name: "Nimusiima Anthony", combo: "O-Level", pts: "12 Agg." }
    ]
  },
  {
    id: '4',
    year: "2022",
    students: [
      { name: "Sande Innocent", combo: "O-Level", pts: "18 Agg." },
      { name: "Mumbere Brandon", combo: "O-Level", pts: "19 Agg." }
    ]
  },
  {
    id: '5',
    year: "2020",
    students: [
      { name: "Natukunde Arnold", combo: "O-Level", pts: "21 Agg." },
      { name: "Bucureezi Sabellah", combo: "O-Level", pts: "22 Agg." }
    ]
  }
];

export async function getWallOfFame(): Promise<WallOfFameYear[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "wallOfFame"));
    if (querySnapshot.empty) {
      for (const year of defaultWof) {
        await saveWofYear(year);
      }
      return defaultWof;
    }
    const data: WallOfFameYear[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id } as WallOfFameYear);
    });
    return data.sort((a, b) => b.year.localeCompare(a.year));
  } catch (e) {
    console.error("Error getting wall of fame: ", e);
    return defaultWof;
  }
}

export async function saveWofYear(year: WallOfFameYear) {
  const { id, ...data } = year;
  await setDoc(doc(db, "wallOfFame", id), data);
}

export async function deleteWofYear(id: string) {
  await deleteDoc(doc(db, "wallOfFame", id));
}
