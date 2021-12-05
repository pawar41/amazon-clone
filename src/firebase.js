

import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyBk_VlCqW-8otjY-GxM-0KsyEOVeeWprx4",
    authDomain: "cloone-a74b1.firebaseapp.com",
    projectId: "cloone-a74b1",
    storageBucket: "cloone-a74b1.appspot.com",
    messagingSenderId: "191397646467",
    appId: "1:191397646467:web:8af1c34412322c36554bb6",
    measurementId: "G-EDJG02Q1M4"
  
  };



const firebaseApp =  initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();


export { db, auth };