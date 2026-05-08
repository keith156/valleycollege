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
  category: 'UCE' | 'UACE';
  students: StudentRecord[];
}

const defaultWof: WallOfFameYear[] = [
  // UCE Data
  {
    id: 'uce-1',
    year: "2025",
    category: 'UCE',
    students: [
      { name: "Ainonugisha Messiah Kiyimba", combo: "O-Level", pts: "3As 6Bs" },
      { name: "Musinguzi Edpa", combo: "O-Level", pts: "2As, 6Bs, 1C" }
    ]
  },
  {
    id: 'uce-2',
    year: "2024",
    category: 'UCE',
    students: [
      { name: "Kabupho Claire Ayebale", combo: "O-Level", pts: "3As, 6Bs" },
      { name: "Mazima Pretty Comfort", combo: "O-Level", pts: "3As, 5Bs, 1C" }
    ]
  },
  {
    id: 'uce-3',
    year: "2023",
    category: 'UCE',
    students: [
      { name: "Asiimwe Lucky", combo: "O-Level", pts: "9 Agg." },
      { name: "Nimusiima Anthony", combo: "O-Level", pts: "12 Agg." }
    ]
  },
  {
    id: 'uce-4',
    year: "2022",
    category: 'UCE',
    students: [
      { name: "Sande Innocent", combo: "O-Level", pts: "18 Agg." },
      { name: "Mumbere Brandon", combo: "O-Level", pts: "19 Agg." }
    ]
  },
  {
    id: 'uce-5',
    year: "2020",
    category: 'UCE',
    students: [
      { name: "Natukunde Arnold", combo: "O-Level", pts: "21 Agg." },
      { name: "Bucureezi Sabellah", combo: "O-Level", pts: "22 Agg." }
    ]
  },
  // UACE Data
  {
    id: 'uace-1',
    year: "2025",
    category: 'UACE',
    students: [
      { name: "Kaka Nolan", combo: "PCM", pts: "3AAC3 (18 Pts)" },
      { name: "Asiimwe Lucky", combo: "BCM", pts: "2ABC2 (17 Pts)" },
      { name: "Arinda Princess", combo: "HEL", pts: "3BBB4 (17 Pts)" }
    ]
  },
  {
    id: 'uace-2',
    year: "2024",
    category: 'UACE',
    students: [
      { name: "Natwijuka Daphine", combo: "KER", pts: "5AAB6 (19 Pts)" },
      { name: "Owomugasho Christian", combo: "PAM", pts: "4ABC4 (17 Pts)" },
      { name: "Komujuni Rhinah", combo: "PAM", pts: "4ABC4 (17 Pts)" },
      { name: "Akampurira January", combo: "BCM", pts: "1ABC6 (17 Pts)" }
    ]
  },
  {
    id: 'uace-3',
    year: "2023",
    category: 'UACE',
    students: [
      { name: "Arinaitwe James", combo: "PEM", pts: "3CCB3 (15 Pts)" },
      { name: "Atwongeire Mlbroad", combo: "BCM", pts: "6ACD6 (15 Pts)" }
    ]
  },
  {
    id: 'uace-4',
    year: "2022",
    category: 'UACE',
    students: [
      { name: "Bwengye Mathar", combo: "BCM", pts: "1AAD3 (17 Pts)" },
      { name: "Ndyabagume Faisal", combo: "BCM", pts: "3ABB4 (16 Pts)" },
      { name: "Namata Ellen Kakooza", combo: "MEG", pts: "4BBD4 (15 Pts)" },
      { name: "Ainembabazi Laticia", combo: "HEG", pts: "5BCC6 (15 Pts)" }
    ]
  },
  {
    id: 'uace-5',
    year: "2020",
    category: 'UACE',
    students: [
      { name: "Katushabe Britah", combo: "LDG", pts: "5ACC6 (16 Pts)" },
      { name: "Musinguzi Aaron", combo: "HED", pts: "6CCB4 (15 Pts)" }
    ]
  },
  {
    id: 'uace-6',
    year: "2019",
    category: 'UACE',
    students: [
      { name: "Ainebyoona Mathias", combo: "BCM", pts: "6BAC6 (17 Pts)" },
      { name: "Mugumya Abraham", combo: "GEA", pts: "5ADC6 (15 Pts)" }
    ]
  }
];

export async function getWallOfFame(): Promise<WallOfFameYear[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "wallOfFame"));
    if (querySnapshot.empty) {
      for (const yearData of defaultWof) {
        await saveWofYear(yearData);
      }
      return defaultWof;
    }
    const dataMap = new Map<string, WallOfFameYear>();

    // 1. Load from Database
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const category = docData.category || (doc.id.startsWith('uace') ? 'UACE' : 'UCE');
      const year = docData.year;
      const key = `${category}-${year}`;
      
      dataMap.set(key, { ...docData, id: doc.id, category } as WallOfFameYear);
    });
    
    // 2. Merge with Defaults (only if year+category doesn't exist)
    defaultWof.forEach(def => {
      const key = `${def.category}-${def.year}`;
      if (!dataMap.has(key)) {
        dataMap.set(key, def);
      }
    });

    const data = Array.from(dataMap.values());
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
