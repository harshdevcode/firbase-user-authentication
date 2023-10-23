// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA51yxgUy4cAAEct_zB57JqHO7b5dAgNg",
  authDomain: "user-auth-a04d1.firebaseapp.com",
  projectId: "user-auth-a04d1",
  storageBucket: "user-auth-a04d1.appspot.com",
  messagingSenderId: "970929259652",
  appId: "1:970929259652:web:ee77c0c08e8ef9f9e62ed1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };