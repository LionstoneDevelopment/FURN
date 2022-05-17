//Firebase Imports
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

//Firestore Imports
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocFromCache,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpd2Gj-Odgaa9ULTgtT37B3UtyvEi-kgI",
  authDomain: "furn-db.firebaseapp.com",
  projectId: "furn-db",
  storageBucket: "furn-db.appspot.com",
  messagingSenderId: "1072724118091",
  appId: "1:1072724118091:web:f0ba22c255818ccf7c5bce",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
