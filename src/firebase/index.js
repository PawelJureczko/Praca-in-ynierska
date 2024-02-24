// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_APP_ID)

const env = import.meta.env

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: env.VITE_API_KEY,
    authDomain: "engineering-thesis-a987e.firebaseapp.com",
    projectId: "engineering-thesis-a987e",
    storageBucket: "engineering-thesis-a987e.appspot.com",
    messagingSenderId: env.MESSAGING_SENDER_ID,
    appId: env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;