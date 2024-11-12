import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDmrHO7zIvXOL0m9MnrCYDdrscExUZFXo",
  authDomain: "fireapp-9f6e7.firebaseapp.com",
  projectId: "fireapp-9f6e7",
  storageBucket: "fireapp-9f6e7.appspot.com",
  messagingSenderId: "161953834651",
  appId: "1:161953834651:web:84949a6c19c5a48cb2483e",
  measurementId: "G-M8W4R50G8Q",
};

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp)
export { db, auth };
