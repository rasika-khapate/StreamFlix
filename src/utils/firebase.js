// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4NB78AgHOU_fFZ1Q_7NTpFGoEvdSyj5I",
  authDomain: "streamflix-22829.firebaseapp.com",
  projectId: "streamflix-22829",
  storageBucket: "streamflix-22829.firebasestorage.app",
  messagingSenderId: "1038642135152",
  appId: "1:1038642135152:web:fa3611e98a980ece9a34b5",
  measurementId: "G-E3WJGMK1EQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
