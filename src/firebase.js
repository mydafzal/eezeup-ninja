import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp(
    {
        apiKey: "AIzaSyDjYGbYok8dcJLgo7wKBzogla0_frI78_E",
        authDomain: "eezeup-ninja.firebaseapp.com",
        databaseURL: "https://eezeup-ninja-default-rtdb.firebaseio.com",
        projectId: "eezeup-ninja",
        storageBucket: "eezeup-ninja.appspot.com",
        messagingSenderId: "571861660916",
        appId: "1:571861660916:web:53beb18a52057dcf9edaa1"

    }
);

export { firebaseConfig as firebase };