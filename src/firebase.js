// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHf3bNAI49NFUbK6dl4K4lB50MSmgO-Jw",
  authDomain: "project-82dc1.firebaseapp.com",
  projectId: "project-82dc1",
  storageBucket: "project-82dc1.firebasestorage.app",
  messagingSenderId: "982095118303",
  appId: "1:982095118303:web:695440f6b939abb0128e6a",
  measurementId: "G-BBMT0PYFEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();