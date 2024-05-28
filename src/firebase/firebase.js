// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyAB358vTkjzuwxx6Tjay_nPhPTC8SLiZDA",
  authDomain: "fir-auth-5c543.firebaseapp.com",
  projectId: "fir-auth-5c543",
  storageBucket: "fir-auth-5c543.appspot.com",
  messagingSenderId: "1048673846504",
  appId: "1:1048673846504:web:024299bd86ee40622e355d",
  measurementId: "G-JDTHX7VKG0",
};
console.log(import.meta.env.VITE_FIREBASE_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
