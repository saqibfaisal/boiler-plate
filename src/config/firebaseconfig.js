// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_14H2G1JQXCn04fT8V2GT6JDJPpIeu5k",
  authDomain: "login-signup-cfc07.firebaseapp.com",
  projectId: "login-signup-cfc07",
  storageBucket: "login-signup-cfc07.appspot.com",
  messagingSenderId: "14518011508",
  appId: "1:14518011508:web:61cd93e120d7ec577d7321",
  measurementId: "G-VZ7J3C2LH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;