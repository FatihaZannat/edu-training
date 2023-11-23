// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRl8tOv5rGEPw-SWpmTJv-rKA28YXEATQ",
  authDomain: "edu-traing.firebaseapp.com",
  projectId: "edu-traing",
  storageBucket: "edu-traing.appspot.com",
  messagingSenderId: "373411383621",
  appId: "1:373411383621:web:9682fe6bb33381ef68d62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;