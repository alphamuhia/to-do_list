import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9uLc5MITNRtBtA4ok0PWfpbNWtXnxKaA",
  authDomain: "to-do-list-198d7.firebaseapp.com",
  projectId: "to-do-list-198d7",
  storageBucket: "to-do-list-198d7.appspot.com",
  messagingSenderId: "974211375741",
  appId: "1:974211375741:web:19542c6c62f0609eedc714",
  measurementId: "G-N3KR895CRT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
