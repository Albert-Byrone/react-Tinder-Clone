// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2NGqjWXIBLbi-rRd3T2cayMHDgz2gWdY",
  authDomain: "tinder-clone-fa435.firebaseapp.com",
  projectId: "tinder-clone-fa435",
  storageBucket: "tinder-clone-fa435.appspot.com",
  messagingSenderId: "593666019266",
  appId: "1:593666019266:web:d38aa41890cd1423f2105b",
  measurementId: "G-82H22JL0VD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = app.firestore();

export default database;
