import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCL1HzgEfyurG1UeT8zmhilK_9VK08DNeg",
    authDomain: "login-31e8f.firebaseapp.com",
    projectId: "login-31e8f",
    storageBucket: "login-31e8f.appspot.com",
    messagingSenderId: "411224520382",
    appId: "1:411224520382:web:541a6e155f2a2a7d3310ef"
  };
  
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;