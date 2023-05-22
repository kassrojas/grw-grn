// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDB6a9cyupXCfNtr4VGeUNjP99uENthOrg",
  authDomain: "grw-grn-db.firebaseapp.com",
  projectId: "grw-grn-db",
  storageBucket: "grw-grn-db.appspot.com",
  messagingSenderId: "912895721544",
  appId: "1:912895721544:web:48efe678526dbee83a187d"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider);