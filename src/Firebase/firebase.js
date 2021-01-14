import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBxExAdVz-ywUKPjeiSu7GXAOJ5vVSMrsY",
  authDomain: "superchat-react-fc5f2.firebaseapp.com",
  projectId: "superchat-react-fc5f2",
  storageBucket: "superchat-react-fc5f2.appspot.com",
  messagingSenderId: "1070975537083",
  appId: "1:1070975537083:web:68cb6499a8ab7a487f3e9e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const serverTimeStamp = () => firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;