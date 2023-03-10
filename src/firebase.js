import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyDZl-iuok-MOgEwyxPWICcRp6xW7YinWOk",
    authDomain: "bbit-project-850a6.firebaseapp.com",
    projectId: "bbit-project-850a6",
    storageBucket: "bbit-project-850a6.appspot.com",
    messagingSenderId: "786483375693",
    appId: "1:786483375693:web:8b24a3231ef92e3071b604",
    measurementId: "G-763PFKYBM8"
  };

  const App = firebase.initializeApp(firebaseConfig);
  const db = App.firestore();
  const auth = firebase.auth();

  export {db,auth};
