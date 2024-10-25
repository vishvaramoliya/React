// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from  "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAxu7R-RQ5vwK9P0MfO8ZBK3_gUbys8mwQ",
  authDomain: "react1-7a34e.firebaseapp.com",
  projectId: "react1-7a34e",
  storageBucket: "react1-7a34e.appspot.com",
  messagingSenderId: "835831875045",
  appId: "1:835831875045:web:711f292134a5e22a011b0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}