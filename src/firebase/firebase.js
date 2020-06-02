import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-JkERMv92Spza1sfAiXa_LJlFGcaiWmI",
  authDomain: "jiffyposv2.firebaseapp.com",
  databaseURL: "https://jiffyposv2.firebaseio.com",
  projectId: "jiffyposv2",
  storageBucket: "jiffyposv2.appspot.com",
  messagingSenderId: "924112354577",
  appId: "1:924112354577:web:b0352273e08f5d9fd3a0b0",
  measurementId: "G-PP6STTG561",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
