// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlC5B9bN47hkUBux4OtExkyN2FFz-talc",
  authDomain: "streamflix-2037b.firebaseapp.com",
  projectId: "streamflix-2037b",
  storageBucket: "streamflix-2037b.firebasestorage.app",
  messagingSenderId: "828287846608",
  appId: "1:828287846608:web:6d59bf224bbbfe1cd076d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
