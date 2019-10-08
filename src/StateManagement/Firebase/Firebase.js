import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBMNYbuU-PesNozzshJwqLiT8N0LbHbsIc",
    authDomain: "tradertrainer-e0396.firebaseapp.com",
    databaseURL: "https://tradertrainer-e0396.firebaseio.com",
    projectId: "tradertrainer-e0396",
    storageBucket: "",
    messagingSenderId: "725785435515",
    appId: "1:725785435515:web:8a812be0b1b5d75943f1de",
    measurementId: "G-0B06JZGQ3M"
};

export const fire = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(fire);
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();