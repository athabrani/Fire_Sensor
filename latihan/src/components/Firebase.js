import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBCW32Oic-qcikjjEm9qElqoZfMkT3XqQk",
  authDomain: "kelompok5-39a6c.firebaseapp.com",
  databaseURL: "https://kelompok5-39a6c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kelompok5-39a6c",
  storageBucket: "kelompok5-39a6c.appspot.com",
  messagingSenderId: "916895058016",
  appId: "1:916895058016:web:f4115dd5cf29d18bdd9b05",
  measurementId: "G-L36149X96C"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {firebaseConfig, database};