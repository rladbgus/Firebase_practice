import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1qjDDfVwIg26drqAL9OYxW28pXd7IUdg",
  authDomain: "practice-firbase.firebaseapp.com",
  databaseURL: "https://practice-firbase.firebaseio.com",
  projectId: "practice-firbase",
  storageBucket: "practice-firbase.appspot.com",
  messagingSenderId: "255822047948",
  appId: "1:255822047948:web:919e7e23925109b14a7069"
};

export default firebase.initializeApp(firebaseConfig);