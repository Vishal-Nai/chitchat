import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCwR-daQaDjx209GJvAb_U8HLTqC3YrBkg",
  authDomain: "chitchat-66d85.firebaseapp.com",
  databaseURL: "https://chitchat-66d85.firebaseio.com",
  projectId: "chitchat-66d85",
  storageBucket: "chitchat-66d85.appspot.com",
  messagingSenderId: "238404920302",
  appId: "1:238404920302:web:12217920f586b9fd7424ff",
  measurementId: "G-2N875LNNN4"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
