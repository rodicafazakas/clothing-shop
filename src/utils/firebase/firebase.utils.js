import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFnZjzUopFgAXa2nLNmg8Pv4TW0Gv7ZwM",
    authDomain: "crown-clothing-938ae.firebaseapp.com",
    projectId: "crown-clothing-938ae",
    storageBucket: "crown-clothing-938ae.appspot.com",
    messagingSenderId: "817826887462",
    appId: "1:817826887462:web:4d168f267f1f7acd1c33e7"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 