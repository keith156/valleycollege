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

const STORAGE_KEY = 'valley_college_wof';

const defaultWof: WallOfFameYear[] = [
  {
    id: '1',
    year: "2024",
    students: [
      { name: "Ajuna Rodney", combo: "BCM/ICT", pts: "19 pts" },
      { name: "Sabiti Alvin", combo: "PCM/ICT", pts: "19 pts" },
      { name: "Mugisha Ethan", combo: "PEM/ICT", pts: "18 pts" },
      { name: "Kato Joshua", combo: "MEG/ICT", pts: "18 pts" }
    ]
  },
  {
    id: '2',
    year: "2023",
    students: [
      { name: "Namanya Grace", combo: "BCM/SUB", pts: "20 pts" },
      { name: "Otim Daniel", combo: "PCM/ICT", pts: "19 pts" },
      { name: "Akello Sarah", combo: "HEG/SUB", pts: "18 pts" }
    ]
  },
  {
    id: '3',
    year: "2022",
    students: [
      { name: "Kizza Martin", combo: "PEM/ICT", pts: "20 pts" },
      { name: "Nalubega Joy", combo: "BCM/SUB", pts: "19 pts" },
      { name: "Ssekandi Paul", combo: "MEG/ICT", pts: "18 pts" }
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
