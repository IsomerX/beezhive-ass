import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7X-w0ijYJO6HXvYrjjLyAHGnTbCAnG_0",
    authDomain: "beezhive-assignment.firebaseapp.com",
    projectId: "beezhive-assignment",
    storageBucket: "beezhive-assignment.appspot.com",
    messagingSenderId: "7206452436",
    appId: "1:7206452436:web:5405d294d62cbbc4088f41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const colRef = collection(db, "users");

export const auth = getAuth(app);
export { app, db, colRef };
