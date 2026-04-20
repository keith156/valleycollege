import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyARTQNW5AFc8kMVikKJSXUhn9i5z2JZ2MI",
  authDomain: "valley-college.firebaseapp.com",
  projectId: "valley-college",
  storageBucket: "valley-college.firebasestorage.app",
  messagingSenderId: "310746404922",
  appId: "1:310746404922:web:dc36516d958503041efd03",
  measurementId: "G-6XP32H3Q60"
};

const firebaseApp = initializeApp(firebaseConfig);

export const app = firebaseApp;
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

