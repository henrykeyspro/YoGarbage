import firebase from 'firebase';

var config={
    apiKey:'AIzaSyBniW_t_uC22nLUhpg_Ob_v_tpugNBny9E',
    authDomain: 'authprihect-56cd6.firebaseapp.com',
    databaseURL:'http://authproject-56cd6.firebaseio.com',
    projectId: 'authproject-56cd6',
    storageBucket:'authproject-56cd6.appspot.com',
    messagingSenderId:'870484023935'
}
const fire = firebase.initializeApp(config);
export default fire
