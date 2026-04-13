export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  img: string;
}

const STORAGE_KEY = 'valley_college_news';

const defaultNews: NewsItem[] = [
  { id: '1', date: "Oct 15, 2026", title: "Outstanding UNEB Results Announced", excerpt: "Valley College students have once again demonstrated exceptional academic performance in the recent national examinations.", img: "/images/10.jpeg" },
  { id: '2', date: "Sep 28, 2026", title: "New Science Laboratory Inauguration", excerpt: "We are thrilled to open our state-of-the-art science facility, shared with Valley University of Science and Technology.", img: "/images/3.jpeg" },
  { id: '3', date: "Sep 10, 2026", title: "Admissions Open for Next Academic Year", excerpt: "Applications are now being accepted for S1 and S5. Early application is highly recommended.", img: "/images/9.jpeg" },
  { id: '4', date: "Aug 22, 2026", title: "Annual Sports Gala Highlights", excerpt: "A spectacular display of talent and sportsmanship at this year's inter-house sports competitions.", img: "/images/IMG_20260401_183410_033.jpg" },
  { id: '5', date: "Jul 05, 2026", title: "Debate Team Wins Regional Championship", excerpt: "Our senior debate team brought home the trophy after a rigorous competition against 20 other schools.", img: "/images/11.jpeg" }
];

export function getNews(): NewsItem[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse news from local storage', e);
    }
  }
  saveNews(defaultNews);
  return defaultNews;
}

export function saveNews(news: NewsItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(news));
}
