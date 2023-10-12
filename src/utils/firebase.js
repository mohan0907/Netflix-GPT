// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTx2-vhMTw2AfQgfX8Mhz6fz7TaXIuqZ4",
  authDomain: "netflixgpt-359b5.firebaseapp.com",
  projectId: "netflixgpt-359b5",
  storageBucket: "netflixgpt-359b5.appspot.com",
  messagingSenderId: "116155101556",
  appId: "1:116155101556:web:2c79f049effe6591f13c21",
  measurementId: "G-52C8Y8PHVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);