import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBwWBLZBA-pk9uPjnKQ1l5UYg2WizfAiqE",
  authDomain: "oddworld-a5db8.firebaseapp.com",
  projectId: "oddworld-a5db8",
  storageBucket: "oddworld-a5db8.appspot.com",
  messagingSenderId: "186035128949",
  appId: "1:186035128949:web:dd4364a83b67071d51063c",
  measurementId: "G-X74TWTX0TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);