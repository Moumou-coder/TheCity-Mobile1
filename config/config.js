// Initialize Firebase
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAepKZMLRE98nv9bZinEmBnbO4mZHqo8jw",
    authDomain: "the-city-app-22e09.firebaseapp.com",
    databaseURL: 'https://the-city-app-22e09.firebaseio.com',
    projectId: "the-city-app-22e09",
    storageBucket: "the-city-app-22e09.appspot.com",
    messagingSenderId: "645099109873",
    appId: "1:645099109873:web:6fac9c36f718ea7f8b1850",
    //measurementId: 'G-measurement-id',
};


firebase.initializeApp(firebaseConfig);
export const dbh = firebase.firestore();
export const auth= firebase.auth();
