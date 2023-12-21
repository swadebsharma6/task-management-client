// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs7M9l4AVZwkYGer4AS25HaV70kGoBOb0",
  authDomain: "task-management-8b940.firebaseapp.com",
  projectId: "task-management-8b940",
  storageBucket: "task-management-8b940.appspot.com",
  messagingSenderId: "507737270785",
  appId: "1:507737270785:web:bbc28873741344c123ae00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


