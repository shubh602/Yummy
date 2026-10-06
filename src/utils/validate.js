// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMjrAraiS5vxs0emWy8-fkydelbIzzW-8",
  authDomain: "foodi-e3fc5.firebaseapp.com",
  projectId: "foodi-e3fc5",
  storageBucket: "foodi-e3fc5.firebasestorage.app",
  messagingSenderId: "913672100765",
  appId: "1:913672100765:web:027a941e7b00feb20ced74",
  measurementId: "G-JBHLBHN826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
