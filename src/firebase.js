import firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyAnTcvo-mos1LDA7bQ3c9Z3DHclsLcKvR0",

  authDomain: "discord-clone-5a88c.firebaseapp.com",

  projectId: "discord-clone-5a88c",

  storageBucket: "discord-clone-5a88c.appspot.com",

  messagingSenderId: "1033773232499",

  appId: "1:1033773232499:web:b6b844b131c69d77c11506"

};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;