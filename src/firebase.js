import firebase from "firebase/app";
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA5qXxfuh23WG1PPwc11iBHn0TJcAodHfw",
    authDomain: "dechat-326aa.firebaseapp.com",
    projectId: "dechat-326aa",
    storageBucket: "dechat-326aa.appspot.com",
    messagingSenderId: "972436864954",
    appId: "1:972436864954:web:90877c50662aabd428a783"
  }).auth();