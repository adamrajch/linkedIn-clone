import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArP0TnWYp8g0qf9vssNekK7UhaGDnsD9A",
  authDomain: "linked-in-9dab7.firebaseapp.com",
  projectId: "linked-in-9dab7",
  storageBucket: "linked-in-9dab7.appspot.com",
  messagingSenderId: "1029145049491",
  appId: "1:1029145049491:web:713a1e5fd45f0984cd5066",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
