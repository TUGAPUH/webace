import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
const app = initializeApp(
    {
        apiKey: "AIzaSyDcptMRSQ-aqVPTHx5utlHoD-vrJoT-OQw",
        authDomain: "chat-fe457.firebaseapp.com",
        projectId: "chat-fe457",
        storageBucket: "chat-fe457.appspot.com",
        messagingSenderId: "219325670915",
        appId: "1:219325670915:web:7076eb0d47468291635036",
        measurementId: "G-PMTHW4CM8H"
    }
);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
export const provider = new GoogleAuthProvider();