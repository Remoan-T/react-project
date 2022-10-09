import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider , signInWithRedirect} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBiBeYDv7JK0hT4HZkRHdcypbeGGF7uTVY",
    authDomain: "crwn-clothing-db-c9f51.firebaseapp.com",
    projectId: "crwn-clothing-db-c9f51",
    storageBucket: "crwn-clothing-db-c9f51.appspot.com",
    messagingSenderId: "894722973710",
    appId: "1:894722973710:web:e3071297e7b47f0f7edc5f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 
  provider.setCustomParameters({
  prompt: "select_account",
  });

 
   export const auth = getAuth();
   export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);