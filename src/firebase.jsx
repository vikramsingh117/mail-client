// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Replace with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5LAmWV9D-8rwZCACpkc3inlXM30-daZE",
    authDomain: "email-system-2cf39.firebaseapp.com",
    projectId: "email-system-2cf39",
    storageBucket: "email-system-2cf39.firebasestorage.app",
    messagingSenderId: "433646376681",
    appId: "1:433646376681:web:f3682f86fede11b0f34278",
    measurementId: "G-0G6PK70NVH"
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
