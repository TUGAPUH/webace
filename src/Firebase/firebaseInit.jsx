import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Initialize Firebase
const app = initializeApp(
    {
        apiKey: process.env.REACT_APP_APIKEY_FIREBASE,
        authDomain: process.env.REACT_APP_AUTHDOMAIN_FIREBASE,
        projectId: process.env.REACT_APP_PROJECTID_FIREBASE,
        storageBucket: process.env.REACT_APP_SORAGEBUCKET_FIREBASE,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID_FIREBASE,
        appId: process.env.REACT_APP_APPID_FIREBASE,
        measurementId: process.env.REACT_APP_MEASUREMENTID_FIREBASE
    }
);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
export const provider = new GoogleAuthProvider();