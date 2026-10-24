import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAbwWzNCnUszM2JmjsX_OS9tdTGcq7SIdw",
  authDomain: "learnlingo-8a25a.firebaseapp.com",
  databaseURL:
    "https://learnlingo-8a25a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-8a25a",
  storageBucket: "learnlingo-8a25a.firebasestorage.app",
  messagingSenderId: "743863740850",
  appId: "1:743863740850:web:22c9180ca9fc97c3601cab",
  measurementId: "G-2WKP4PTVR5",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
