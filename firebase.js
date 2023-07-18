import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBB5XgxESvx0TUFOj0UKBhMW9rDexjHFoM",
    authDomain: "helenclass-de053.firebaseapp.com",
    projectId: "helenclass-de053",
    storageBucket: "helenclass-de053.appspot.com",
    messagingSenderId: "1052172288424",
    appId: "1:1052172288424:web:99a65ab159baa97eb11d9d",
    measurementId: "G-GMP1H8CM1G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();