// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2NGqjWXIBLbi-rRd3T2cayMHDgz2gWdY",
  authDomain: "tinder-clone-fa435.firebaseapp.com",
  projectId: "tinder-clone-fa435",
  storageBucket: "tinder-clone-fa435.appspot.com",
  messagingSenderId: "593666019266",
  appId: "1:593666019266:web:d38aa41890cd1423f2105b",
  measurementId: "G-82H22JL0VD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
