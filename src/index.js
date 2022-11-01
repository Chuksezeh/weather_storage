// import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import {getAuth, onAuthStateChanged} from "firebase/auth";
// import {getFirestore, collection, getDocs, getDoc} from "firebase/firestore";

// const firebase = initializeApp({
//     apiKey: "AIzaSyDerOKG_UQz9Xg5NNHHrInW41EH59wdUDw",
//     authDomain: "tutorial-project-37ca4.firebaseapp.com",
//     projectId: "tutorial-project-37ca4",
//     storageBucket: "tutorial-project-37ca4.appspot.com",
//     messagingSenderId: "733961893316",
//     appId: "1:733961893316:web:6c88e14738f5c04eac6091",
//     measurementId: "G-FFE00EDCZJ"
// });
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// db.collection('Tutorial').getDocs();
// const todosCol = collection(db, 'Tutorial')
// const snapshot = await getDocs(todosCol)

// auth.onAuthStateChanged(user =>{

// });

// onAuthStateChanged(auth, user =>{
//     if(user = null) {
//         console.log('logged in!')
//     }else {
//         console.log('No user')
//     }
// });

//db.collection('Tutorial').get().then((snapshot) =>{
//     snapshot.docs.forEach(doc =>{
//     console.log(doc.data());
//     });
// }).catch(err => {
//     console.log(err);
// });
const submit = document.querySelector('.form-2');
console.log(submit) 

const names = document.querySelector('.name');
console.log(names)

const pass = document.querySelector('.pass');
console.log(pass)
const email = document.querySelector('.email');
console.log(email)
const number = document.querySelector('.number');

const createBtn = document.querySelector('.createbtn');
const updateBtn = document.querySelector('.updatebtn');
const retrieveBtn = document.querySelector('.retrievebtn');

const deletebtn = document.querySelector('.deleteBtn');

submit.addEventListener('submit', (e) =>{
    e.preventDefault();

    console.log(submit)

});
