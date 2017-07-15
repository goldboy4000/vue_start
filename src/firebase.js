import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({

    apiKey: "AIzaSyBfhuaXgcTIs2SfxT5D_URZZLYO8LUydCI",
    authDomain: "vue-plus-firebase.firebaseapp.com",
    databaseURL: "https://vue-plus-firebase.firebaseio.com",
    projectId: "vue-plus-firebase",
    storageBucket: "",
    messagingSenderId: "484412029701"
});

export const db = firebaseApp.database();