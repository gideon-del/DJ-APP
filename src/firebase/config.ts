import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "dj-app-8a9f7.firebaseapp.com",
  projectId: "dj-app-8a9f7",
  storageBucket: "dj-app-8a9f7.appspot.com",
  messagingSenderId: "817558061465",
  appId: "1:817558061465:web:8da7cbb063f5e5afa05308",
  measurementId: "G-Y2H9JE7146",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
