// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: 
    authDomain:
    projectId: 
    storageBucket:
    messagingSenderId:
    appId: 
    measurementId: 
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
