import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCH2qdNs7OtTDSwaHCdpM2lsjYKxrCe_dg",
  authDomain: "life-hao.firebaseapp.com",
  databaseURL: "https://life-hao.firebaseio.com",
  projectId: "life-hao",
  storageBucket: "life-hao.appspot.com",
  messagingSenderId: "288698402362",
  appId: "1:288698402362:web:943a4c0acdeaf1efb7d703",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const firestore = firebase.firestore;
