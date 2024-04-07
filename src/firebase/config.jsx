import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmjZTSDLRrob6DhN_6f2Iw3wqG363cxxY",
  authDomain: "oas1-ef8d8.firebaseapp.com",
  projectId: "oas1-ef8d8",
  storageBucket: "oas1-ef8d8.appspot.com",
  messagingSenderId: "684681414783",
  appId: "1:684681414783:web:28385ed5d537297bc4d74a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
