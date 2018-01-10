import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyD6XPWwbg4x6ygfL35mOERSsLmD4ofo8RM",
  authDomain: "wheel-of-fortune-e397a.firebaseapp.com",
  databaseURL: "https://wheel-of-fortune-e397a.firebaseio.com",
  projectId: "wheel-of-fortune-e397a",
  storageBucket: "",
  messagingSenderId: "893874543272"
};
firebase.initializeApp(config);

export default firebase;