import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from './firebase';

export interface Review {
  id?: string;
  name: string;
  location: string;
  relationship: string;
  comment: string;
  rating: number;
  createdAt: any;
}

const COLLECTION_NAME = 'reviews';

export const saveReview = async (review: Omit<Review, 'id' | 'createdAt'>) => {
  const reviewsCol = collection(db, COLLECTION_NAME);
  await addDoc(reviewsCol, {
    ...review,
    createdAt: Timestamp.now()
  });
};

export const getReviews = async (): Promise<Review[]> => {
  const reviewsCol = collection(db, COLLECTION_NAME);
  const q = query(reviewsCol, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate()?.toLocaleDateString() || 'Recently'
  } as Review));
};

export const deleteReview = async (id: string) => {
  const reviewRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(reviewRef);
};
