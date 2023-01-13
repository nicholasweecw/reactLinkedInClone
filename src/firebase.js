import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtQvjjLbqMLC1_WGHu82nZKerT16nvKaI",
    authDomain: "linkedin-clone-2d5a9.firebaseapp.com",
    projectId: "linkedin-clone-2d5a9",
    storageBucket: "linkedin-clone-2d5a9.appspot.com",
    messagingSenderId: "971648120448",
    appId: "1:971648120448:web:125073755c6fb539331865",
    measurementId: "G-M2KKL9K7D9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }