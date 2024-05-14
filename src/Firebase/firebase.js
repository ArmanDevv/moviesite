// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore, collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqQ4satf0Bqp4-zNtjAfLBi-soL7J3hIc",
  authDomain: "movieverse-1136c.firebaseapp.com",
  projectId: "movieverse-1136c",
  storageBucket: "movieverse-1136c.appspot.com",
  messagingSenderId: "877237340447",
  appId: "1:877237340447:web:81dd1c563176445a92082a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movies = collection(db, "movies");
export default app;