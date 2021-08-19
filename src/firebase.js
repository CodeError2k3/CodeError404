import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBP3hNALwJU1hj6nQDIsPmw9Ou24E9NJ3U",
    authDomain: "firechat-af6ac.firebaseapp.com",
    projectId: "firechat-af6ac",
    storageBucket: "firechat-af6ac.appspot.com",
    messagingSenderId: "607667588885",
    appId: "1:607667588885:web:aeb06d7bfd820d68ea231c",
    measurementId: "G-8E4BV4WXLJ"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
