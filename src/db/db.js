
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyArUvkW_OQmRfVSRP0cRxaAkhmw4ayHveo",
    authDomain: "diariosyrevistasreact.firebaseapp.com",
    projectId: "diariosyrevistasreact",
    storageBucket: "diariosyrevistasreact.appspot.com",
    messagingSenderId: "622002328067",
    appId: "1:622002328067:web:bb480298081745c85df436"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db