import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB0_PyqZxFZm8t0jY3PAFyP8oMxFalCYGA",
  authDomain: "studyfind-researcher.firebaseapp.com",
  databaseURL: "https://studyfind-researcher.firebaseio.com",
  projectId: "studyfind-researcher",
  storageBucket: "studyfind-researcher.appspot.com",
  messagingSenderId: "434311866185",
  appId: "1:434311866185:web:6f6fa118d0b3b6959f1c98",
});

export const auth = app.auth();
export const storage = app.storage();
export const firestore = app.firestore();
export const functions = app.functions();

export const side = "researcher";
