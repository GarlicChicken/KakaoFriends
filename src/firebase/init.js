import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCP4OvD39_IyykMKgO0e3947qPNWWjJVv8",
    authDomain: "kakao-friends.firebaseapp.com",
    databaseURL: "https://kakao-friends.firebaseio.com",
    projectId: "kakao-friends",
    storageBucket: "kakao-friends.appspot.com",
    messagingSenderId: "637542420757"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
