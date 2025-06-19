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
  apiKey: "AIzaSyBaAHoOH5ff0iCMT5RSLA81Kzrx__yZPt8",
  authDomain: "interview-ai-e851a.firebaseapp.com",
  projectId: "interview-ai-e851a",
  storageBucket: "interview-ai-e851a.firebasestorage.app",
  messagingSenderId: "190474232086",
  appId: "1:190474232086:web:cac4f7e2f65bee2c263037",
  measurementId: "G-FM6TWTEJHJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);


