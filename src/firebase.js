import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzkRPaLkl5_KyU5y4ZI-8xvS3Ahag3Kdg",
    authDomain: "clone-7a97e.firebaseapp.com",
    projectId: "clone-7a97e",
    storageBucket: "clone-7a97e.appspot.com",
    messagingSenderId: "66747668926",
    appId: "1:66747668926:web:eadaab42b311e460ee81ef",
    measurementId: "G-L6P8Q38TEW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};