import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCoDpVrngJzAxP4p84KQcge-kQ_i9huaws',
    authDomain: 'react-app-cursos-c573e.firebaseapp.com',
    projectId: 'react-app-cursos-c573e',
    storageBucket: 'react-app-cursos-c573e.appspot.com',
    messagingSenderId: '1016447653278',
    appId: '1:1016447653278:web:13fe00b4f40d772a4e728f',
    measurementId: 'G-DZXZQYQT1X',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
