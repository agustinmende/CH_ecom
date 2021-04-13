import firebase from "firebase/app";
import "firebase/firestore";
import {firebaseConfig} from './src/firebaseConfig';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB8mj3McVgfcOXNZnYlx_gKzGU02IFc_ks",
  authDomain: "coderhouse-a2dba.firebaseapp.com",
  databaseURL: "https://coderhouse-a2dba-default-rtdb.firebaseio.com",
  projectId: "coderhouse-a2dba",
  storageBucket: "coderhouse-a2dba.appspot.com",
  messagingSenderId: "446537063086",
  appId: "1:446537063086:web:ec405bed3db89c76c3eb3f"
});

var db = firebase.firestore();

var items = [

    {
      category : "Hombre",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fullDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pictureUrl : "/morrison.png",
      price : 20,
      stock : 5,
      title : "Anillo Morrison"
    },
    {
      category : "Hombre",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fullDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pictureUrl : "/ringo.png",
      price : 20,
      stock : 5,
      title : "Anillo Ringo"
    },
    {
      category : "Mujer",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fullDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pictureUrl : "/jean.png",
      price : 20,
      stock : 5,
      title : "Anillo Jean"
    },
    {
      category : "Hombre",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fullDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pictureUrl : "/ryan.png",
      price : 20,
      stock : 5,
      title : "Anillo Ryan"
    },
    {
      category : "Mujer",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fullDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pictureUrl : "/sello.png",
      price : 20,
      stock : 5,
      title : "Anillo Sello"
    },
    {
      category : "Hombre",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fullDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pictureUrl : "/paul.png",
      price : 20,
      stock : 5,
      title : "Anillo Paul"
    },
    {
      category : "Hombre",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fullDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pictureUrl : "/rock.png",
      price : 20,
      stock : 5,
      title : "Anillo Rock"
    },
    {
      category : "Hombre",
      description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fullDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pictureUrl : "/ringo.png",
      price : 20,
      stock : 5,
      title : "Anillo Ringo"
    },
];

var categories = [
  {
    name: "Hombre",
  },
  {
    name: "Mujer",
  },
];

items.forEach(function (obj) {
  db.collection("items")
    .add({
      category: obj.category,
      description: obj.description,
      fullDescription: obj.fullDescription,
      pictureUrl: obj.pictureUrl,
      price: obj.price,
      stock: obj.stock,
      title: obj.title,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});

categories.forEach(function (obj) {
  db.collection("categories")
    .add({
      name: obj.name,
     // pictureUrl: obj.pictureUrl,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
