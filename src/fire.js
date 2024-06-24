// Import the functions you need from the SDKs you need
import "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRWDH14sK4uJ2OD8cOGmnk2CQKWq1y_AE",
  authDomain: "loadstoneshop.firebaseapp.com",
  projectId: "loadstoneshop",
  storageBucket: "loadstoneshop.appspot.com",
  messagingSenderId: "908817939372",
  appId: "1:908817939372:web:2ad4c47e5e4932b0add809",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
