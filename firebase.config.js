// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNMwk9ii4R8DuKTyTz1yS4pAYTjituYS8",
    authDomain: "tierra-univalle.firebaseapp.com",
    projectId: "tierra-univalle",
    storageBucket: "tierra-univalle.appspot.com",
    messagingSenderId: "932357223357",
    appId: "1:932357223357:web:cd29f66405ffcb36fb18d4",
    measurementId: "G-E0JVWK7N3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
export { auth, db };