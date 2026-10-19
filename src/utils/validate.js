// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpZ0gs6e7j_Ui9WIJT5MmbZUw4tcXIfj0",
  authDomain: "yummy-18f9b.firebaseapp.com",
  projectId: "yummy-18f9b",
  storageBucket: "yummy-18f9b.firebasestorage.app",
  messagingSenderId: "821533950319",
  appId: "1:821533950319:web:53f0441a01d3e289aca89a",
  measurementId: "G-GWYZB4XK6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);