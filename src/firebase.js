import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUd-MHtvGMwbfFNtNZtbDUPmbuTJbRs_s",
  authDomain: "portfolio-21d08.firebaseapp.com",
  projectId: "portfolio-21d08",
  storageBucket: "portfolio-21d08.appspot.com",
  messagingSenderId: "689695600620",
  appId: "1:689695600620:web:0bc7848f93a6ccc2dddac9",
  measurementId: "G-1Y2SR1NFPC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);