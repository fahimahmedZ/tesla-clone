import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCzk-49__aTKxcsUttEf3Fk7mfIrKes22U",
    authDomain: "tesla-clone-5339d.firebaseapp.com",
    projectId: "tesla-clone-5339d",
    storageBucket: "tesla-clone-5339d.appspot.com",
    messagingSenderId: "185623384716",
    appId: "1:185623384716:web:149c9803562c38ee7aa1a9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth }