import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAt_1TqbOwZpJWRLnU7icoiXYvY0LSGw68",
    authDomain: "krishbagsreact.firebaseapp.com",
    projectId: "krishbagsreact",
    storageBucket: "krishbagsreact.appspot.com",
    messagingSenderId: "743638401932",
    appId: "1:743638401932:web:2ccb7ff651e27c97f08ca9",
    measurementId: "G-SL5P61EQ8E"
  });

  const db = firebase.firestore();

  export {db};