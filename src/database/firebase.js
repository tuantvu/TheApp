// import and configure firebase
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDvjW-9vOuKShiW5ykzE8_xOqLZT5WoYGc",
    authDomain: "theapp-f28c3.firebaseapp.com",
    databaseURL: "https://theapp-f28c3.firebaseio.com",
    projectId: "theapp-f28c3",
    storageBucket: "theapp-f28c3.appspot.com",
    messagingSenderId: "892868116010"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const database = firebaseApp.database();
