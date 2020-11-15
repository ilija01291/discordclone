import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDuJHALJAs7kjEE3HEilR-n8WiGlJtQOto",
    authDomain: "discord-clone-1ef98.firebaseapp.com",
    databaseURL: "https://discord-clone-1ef98.firebaseio.com",
    projectId: "discord-clone-1ef98",
    storageBucket: "discord-clone-1ef98.appspot.com",
    messagingSenderId: "609149331899",
    appId: "1:609149331899:web:2370be3c136fb2948fbc9e",
    measurementId: "G-5EER2CG7YE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

