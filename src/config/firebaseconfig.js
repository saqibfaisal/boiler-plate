// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdEgLLCtJFQaFi5Ngrc5sp8tIt5iuty1w",
  authDomain: "admin-dashboard-b8c4e.firebaseapp.com",
  projectId: "admin-dashboard-b8c4e",
  storageBucket: "admin-dashboard-b8c4e.appspot.com",
  messagingSenderId: "544057554830",
  appId: "1:544057554830:web:12ff46d633746ee34e96df",
  measurementId: "G-16XJ14EMLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;