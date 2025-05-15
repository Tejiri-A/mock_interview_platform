// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFXzhzBE9Wy7Co44-aRmeGZQQppB1siYE",
    authDomain: "prepwise-3e0f3.firebaseapp.com",
    projectId: "prepwise-3e0f3",
    storageBucket: "prepwise-3e0f3.firebasestorage.app",
    messagingSenderId: "914749676348",
    appId: "1:914749676348:web:1f39134474e0891a9d1c39",
    measurementId: "G-89ZS1RV07Y"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);