import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection ,writeBatch ,query ,getDocs} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiBeYDv7JK0hT4HZkRHdcypbeGGF7uTVY",
  authDomain: "crwn-clothing-db-c9f51.firebaseapp.com",
  projectId: "crwn-clothing-db-c9f51",
  storageBucket: "crwn-clothing-db-c9f51.appspot.com",
  messagingSenderId: "894722973710",
  appId: "1:894722973710:web:e3071297e7b47f0f7edc5f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) => {

const collectionRef = collection(db , collectionKey);
const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
  const docRef = doc(collectionRef, object.title.toLowerCase());
  batch.set(docRef, object);
});

await batch.commit();
console.log('done');
};


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'catagories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};


export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("Ther is an Error !", err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
 export const userSignOut = async () => signOut(auth);

 export const onAuthStateChangedListner = (callBack) => onAuthStateChanged(auth,callBack);