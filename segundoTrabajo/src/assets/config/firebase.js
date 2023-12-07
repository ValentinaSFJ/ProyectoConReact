import { initializeApp } from "firebase/compat/app";
import { getAuth } from "firebase/compat/auth";
import { getFirestore } from "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3pL93IPG0vMU7gH1E2ADOPFNmnXLsIwQ",
  authDomain: "dr2023-64bbb.firebaseapp.com",
  projectId: "dr2023-64bbb",
  storageBucket: "dr2023-64bbb.appspot.com",
  messagingSenderId: "116143804524",
  appId: "1:116143804524:web:b4ea1a7826c2eee616c849",
  measurementId: "G-SBNYTMZV4V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
