// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCdySvci4c14TIicfMsSHJ0PuEklJmSoqM",
  authDomain: "react-course-23d14.firebaseapp.com",
  projectId: "react-course-23d14",
  storageBucket: "react-course-23d14.appspot.com",
  messagingSenderId: "641607385727",
  appId: "1:641607385727:web:48ae0117e110c9f0b9b54a",
  measurementId: "G-GND7WVRKDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();