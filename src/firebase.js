import firebase from "firebase";
const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyDNeB5txrJbIORg9Wf0ZDUPkekefLs1XD4",
  authDomain: "clone-8995a.firebaseapp.com",
  databaseURL: "https://clone-8995a.firebaseio.com",
  projectId: "clone-8995a",
  storageBucket: "clone-8995a.appspot.com",
  messagingSenderId: "813430757091",
  appId: "1:813430757091:web:c9a14daf530cee6cae97d6",
  measurementId: "G-QZKRG1YZV4",
});
const db = firebaseapp.firestore();
const auth = firebase.auth();
export { db, auth };
