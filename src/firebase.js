// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgV9z9jZpEet_xSBb3J9Vy_i76tEMNh3U",
  authDomain: "chat-dac42.firebaseapp.com",
  projectId: "chat-dac42",
  storageBucket: "chat-dac42.appspot.com",
  messagingSenderId: "208003705877",
  appId: "1:208003705877:web:27da86b1b4ac930297321c"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const storage = getStorage();
export const db = getFirestore()
