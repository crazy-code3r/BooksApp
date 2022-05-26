// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoqGEBFghiXi2cbEAexwDJ36jE7_7cYkg",
  authDomain: "bookapp-722aa.firebaseapp.com",
  projectId: "bookapp-722aa",
  storageBucket: "bookapp-722aa.appspot.com",
  messagingSenderId: "985265019669",
  appId: "1:985265019669:web:21975cf7592ade82e1e71c",
  measurementId: "G-BLEFPVLQXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);