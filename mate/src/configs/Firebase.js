import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8mj3McVgfcOXNZnYlx_gKzGU02IFc_ks",
    authDomain: "coderhouse-a2dba.firebaseapp.com",
    databaseURL: "https://coderhouse-a2dba-default-rtdb.firebaseio.com",
    projectId: "coderhouse-a2dba",
    storageBucket: "coderhouse-a2dba.appspot.com",
    messagingSenderId: "446537063086",
    appId: "1:446537063086:web:ec405bed3db89c76c3eb3f"
  };

  const app = firebase.initializeApp(firebaseConfig);


  export function getFirestore(){
      return firebase.firestore(app);
  }

