import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore"; 

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7HAnr-7v1D9giLD8JYTYGYQs-fFasGiI",
  authDomain: "chat-firebase-d8938.firebaseapp.com",
  projectId: "chat-firebase-d8938",
  storageBucket: "chat-firebase-d8938.appspot.com",
  messagingSenderId: "407071322588",
  appId: "1:407071322588:web:5bde820dc63f5b4e32df19",
  measurementId: "G-DQMX3Y2C4V"
})

// export const firestore = firebaseApp.firestore();
export const firestore = getFirestore(firebaseApp);
