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

const STORAGE_KEY = 'valley_college_wof_v2';

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

export function getWallOfFame(): WallOfFameYear[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse wall of fame from local storage', e);
    }
  }
  saveWallOfFame(defaultWof);
  return defaultWof;
}

export function saveWallOfFame(data: WallOfFameYear[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
