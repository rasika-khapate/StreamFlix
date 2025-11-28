// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcFp50BMsyRTRWvtiKPN8xNzdcd-7R_iE",
  authDomain: "streamflix-64b2f.firebaseapp.com",
  projectId: "streamflix-64b2f",
  storageBucket: "streamflix-64b2f.firebasestorage.app",
  messagingSenderId: "358205698438",
  appId: "1:358205698438:web:3c7de287a9199c4a21fc07",
  measurementId: "G-2E3W71HHXG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
