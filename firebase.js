import firebase from "firebase";

const firebaseConfig = {
      apiKey: "AIzaSyDf8Z3mCayTnKFR8P7sIqk8Ve_V9j3oXr8",
      authDomain: "uber-eats-react-b9e2a.firebaseapp.com",
      projectId: "uber-eats-react-b9e2a",
      storageBucket: "uber-eats-react-b9e2a.appspot.com",
      messagingSenderId: "728065258214",
      appId: "1:728065258214:web:01dc31b5a18d45ae6ac127"
    };

    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

    export default firebase;
    