// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyATh5B2_vnRmLIZxsZQ9RIBIPya6axaD-Y",
  authDomain: "mulmetcompany.firebaseapp.com",
  projectId: "mulmetcompany",
  storageBucket: "mulmetcompany.firebasestorage.app",
  messagingSenderId: "888758801781",
  appId: "1:888758801781:web:2ddd6f123b3b6dd4cdef3c",
  measurementId: "G-QSZDLWFTBZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;