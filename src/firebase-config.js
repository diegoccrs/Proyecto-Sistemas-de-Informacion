// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEGX6DExJ4wrB1XUIww4M49WnFdGx6gkY",
  authDomain: "deli-pernil.firebaseapp.com",
  projectId: "deli-pernil",
  storageBucket: "deli-pernil.appspot.com",
  messagingSenderId: "231637892410",
  appId: "1:231637892410:web:59c4a88c7c076bea2b2403",
  measurementId: "G-BJNVGD1FE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
//const analytics = getAnalytics(app);