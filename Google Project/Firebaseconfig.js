import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0-uOjvo7_P8Fizvvc1U33Q35v1geX7ZM",
  authDomain: "project-5a135.firebaseapp.com",
  projectId: "project-5a135",
  storageBucket: "project-5a135.firebasestorage.app",
  messagingSenderId: "445667662069",
  appId: "1:445667662069:web:c7387e2e26acb16f020dbc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider =new GoogleAuthProvider(app)
export {auth , provider , db}