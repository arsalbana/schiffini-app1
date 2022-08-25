// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtRWNGkJZVKKRNoYMcduIQusM922Ukm5o",
  authDomain: "burgourmet-8dd1a.firebaseapp.com",
  projectId: "burgourmet-8dd1a",
  storageBucket: "burgourmet-8dd1a.appspot.com",
  messagingSenderId: "636670920191",
  appId: "1:636670920191:web:e26ac10f94cec22d2113ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db