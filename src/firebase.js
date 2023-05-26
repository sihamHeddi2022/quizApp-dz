// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFObjbRqZ0ev4bVNFmDWVuAyM-xvm1isc",
  authDomain: "quizapp-dz.firebaseapp.com",
  projectId: "quizapp-dz",
  storageBucket: "quizapp-dz.appspot.com",
  messagingSenderId: "40774311999",
  appId: "1:40774311999:web:f4a073776d54bd3cf3588a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

