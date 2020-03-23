import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAOGHYh2GvAUbLKnx2KAewY8KVwrslq6Vc",
  authDomain: "react-shopping-cart-556d7.firebaseapp.com",
  databaseURL: "https://react-shopping-cart-556d7.firebaseio.com",
  projectId: "react-shopping-cart-556d7",
  storageBucket: "react-shopping-cart-556d7.appspot.com",
  messagingSenderId: "770109151764",
  appId: "1:770109151764:web:e3e9207925d3b5ac102501",
  measurementId: "G-GCWXJ6L20H"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
