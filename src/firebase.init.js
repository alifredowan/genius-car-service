// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPxYM5WkdhCvfrpIMWN6ctqfbytDz2_74",
  authDomain: "genius-car-service-66ac8.firebaseapp.com",
  projectId: "genius-car-service-66ac8",
  storageBucket: "genius-car-service-66ac8.appspot.com",
  messagingSenderId: "385966594532",
  appId: "1:385966594532:web:59d653c8d6394a62900ff1",
  measurementId: "G-G7CHFWQ2SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
