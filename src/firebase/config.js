import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC5RaTK0Q-QVfpiMMzMVZABsRxAVpvBJks",
    authDomain: "photo-gram-41e9e.firebaseapp.com",
    projectId: "photo-gram-41e9e",
    storageBucket: "photo-gram-41e9e.appspot.com",
    messagingSenderId: "232608928488",
    appId: "1:232608928488:web:21c0db304d8d9335ce2f5d"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};