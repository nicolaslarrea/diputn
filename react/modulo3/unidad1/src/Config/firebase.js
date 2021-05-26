import  firebase from 'firebase'

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA9Vi2QbUVn_2j8o1fas3Gzm30GTHndIhU",
  authDomain: "diplomatura-c1893.firebaseapp.com",
  projectId: "diplomatura-c1893",
  storageBucket: "diplomatura-c1893.appspot.com",
  messagingSenderId: "32026429151",
  appId: "1:32026429151:web:29536f535192b76c350b6a"
}

firebase.initializeApp(firebaseConfig)

firebase.auth = firebase.auth()
firebase.db = firebase.firestore()

export default firebase
