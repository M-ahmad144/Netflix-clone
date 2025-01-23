// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzPP1_2KIzc6efkWFH_IUJVkFUDP3WBNs",

  authDomain: "netflix-be0b7.firebaseapp.com",

  projectId: "netflix-be0b7",

  storageBucket: "netflix-be0b7.firebasestorage.app",

  messagingSenderId: "492664944396",

  appId: "1:492664944396:web:f4fce6166d8fdf8cd2bb29",

  measurementId: "G-ZD54SKQ6XB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
