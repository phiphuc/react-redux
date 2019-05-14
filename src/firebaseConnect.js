import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAvDLJyXIUOlAcDiGxkMsh3DLth-ZuXZPw",
    authDomain: "mayhem-e4547.firebaseapp.com",
    databaseURL: "https://mayhem-e4547.firebaseio.com",
    projectId: "mayhem-e4547",
    storageBucket: "mayhem-e4547.appspot.com",
    messagingSenderId: "458183906137",
    appId: "1:458183906137:web:aebfbdd01f8113d0"
  };

   const firebaseConnect = firebase.initializeApp(firebaseConfig);
   export const noteData = firebaseConnect.database().ref('mayhem-e4547');

//   data.once('value').then((snapshot) => {
//       console.log(snapshot.val());
//   })