// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp, GoogleAuthProvider } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzxafFOKIbQ5AH3bnr1l4e9pdkyy1kuAc",
  authDomain: "interviewai-c6b35.firebaseapp.com",
  projectId: "interviewai-c6b35",
  storageBucket: "interviewai-c6b35.firebasestorage.app",
  messagingSenderId: "407611276691",
  appId: "1:407611276691:web:5f028ac12cb40e81117c66"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);


