// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyKtiIumkU0gSc5bXh-nxBkRxuRuiPyc8",
  authDomain: "career-mentors-f55fe.firebaseapp.com",
  projectId: "career-mentors-f55fe",
  storageBucket: "career-mentors-f55fe.firebasestorage.app",
  messagingSenderId: "132703451470",
  appId: "1:132703451470:web:90e852e87b40eeccd6861f",
  measurementId: "G-17XXC8HB0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);