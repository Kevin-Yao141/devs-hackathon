import { initializeApp } from "firebase/app";
import "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbzeT9Sw8xaf5qeHjJqT3DZASNoW8PfsM",
  
  authDomain: "devs-hackathon.firebaseapp.com",

  projectId: "devs-hackathon",

  storageBucket: "devs-hackathon.appspot.com",

  messagingSenderId: "162284104259",

  appId: "1:162284104259:web:9930d0d37e6537aff7c2f6",

  measurementId: "G-X4P1GXTFG4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
