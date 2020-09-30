import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyApqamViRpgtFK-ub6kM_lWMw_ds8AK5AE",
    authDomain: "yogarbage-ad221.firebaseapp.com",
    databaseURL: "https://yogarbage-ad221.firebaseio.com",
    projectId: "yogarbage-ad221",
    storageBucket: "yogarbage-ad221.appspot.com",
    messagingSenderId: "379908609642",
    appId: "1:379908609642:web:8accc0a67c1c96e3ae9c13",
    measurementId: "G-QNYECVJ7QR"
  };
  var Fire = firebase.initializeApp(firebaseConfig);
  export default Fire ;