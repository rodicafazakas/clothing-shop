import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut, 
  onAuthStateChanged, // observable listener
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  collection, 
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "crown-clothing-938ae.firebaseapp.com",
    projectId: "crown-clothing-938ae",
    storageBucket: "crown-clothing-938ae.appspot.com",
    messagingSenderId: "817826887462",
    appId: "1:817826887462:web:4d168f267f1f7acd1c33e7"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  export const auth = getAuth(); // singleton

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider); 
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); 


  export const db = getFirestore(); 

  // user registration and authentification

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new  Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the error', error.message)
      }
    }
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

  // add collection and documents to the database (Firestore)
  export const addCollectionAndDocuments = async (collecctionKey, objectsToAdd) => {
    const collectionRef = collection(db, collecctionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach( (object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });  

    await batch.commit();
    console.log('done');
  };

  // retrieve the data from the database
  export const  getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categories = querySnapshot.docs.map(docSnapshot => docSnapshot.data());

    return categories;
  };