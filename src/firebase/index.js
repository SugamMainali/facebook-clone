import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBaF_czR6HELd6qzslSzrWatWBditZeCi8",
  authDomain: "facebook-clone-68f10.firebaseapp.com",
  databaseURL: "https://facebook-clone-68f10.firebaseio.com",
  projectId: "facebook-clone-68f10",
  storageBucket: "facebook-clone-68f10.appspot.com",
  messagingSenderId: "1030335079876",
  appId: "1:1030335079876:web:9da0c9269b3b5b0a22b091",
  measurementId: "G-TVH9CNLQHW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();
export { storage, firebase as default };
