// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSEeBE_KpsV6STHn0Ri_xbeuTXDkKyxvM",
  authDomain: "tchicha-dcf64.firebaseapp.com",
  projectId: "tchicha-dcf64",
  storageBucket: "tchicha-dcf64.appspot.com",
  messagingSenderId: "325287779162",
  appId: "1:325287779162:web:e2be967fd28b9f64b67163"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();