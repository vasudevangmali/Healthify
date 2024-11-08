import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAbiq20nrrOs4tSFEVzcyCaFTGwQwGyHLw",
    authDomain: "healthify-fe76b.firebaseapp.com",
    databaseURL: "https://healthify-fe76b-default-rtdb.firebaseio.com",
    projectId: "healthify-fe76b",
    storageBucket: "healthify-fe76b.appspot.com",
    messagingSenderId: "619182341121",
    appId: "1:619182341121:web:496c6377cbdbee4a83d400",
    measurementId: "G-XNJRQJX867"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, setDoc, doc };