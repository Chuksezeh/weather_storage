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
// const submit = document.querySelector('.form-2');
 

// const names = document.querySelector('#name');

//const pass = document.querySelector('.pass');


// submit.addEventListener('submit', e =>{
//     e.preventDefault();
// console.log(submit.names.value);

    

// });


// const form = document.querySelector('.row');
// const email = document.querySelector('#static');


// form.addEventListener('submit', e =>{
//     e.preventDefault();

// console.log(email.value);
// });


const fname = document.querySelector('.fname');
const username = document.querySelector('.username');
const fNumber = document.querySelector('.phone');
const email = document.querySelector('.email');

 
//  const retrieveBtn = document.querySelector('.retrievebtn');
//  const deletebtn = document.querySelector('.deleteBtn');


// 
// const input = document.querySelector('#name');
const create = document.querySelector('#createbtn');

const retrieve =document.querySelector('#retrievebtn')
const update =document.querySelector('#updatebtn')
const deleteBtn =document.querySelector('#deletebtn')


create.addEventListener('click', e =>{
    e.preventDefault();
    console.log(fNumber.value);
    console.log(fname.value);
    console.log(username.value);
    console.log(email.value);

});
retrieve.addEventListener('click', e =>{
    e.preventDefault();
    console.log(fNumber.value);
    console.log(fname.value);
    console.log(username.value);
    console.log(email.value);
});

update.addEventListener('click', e =>{
    e.preventDefault();
    console.log(fNumber.value);
    console.log(fname.value);
    console.log(username.value);
    console.log(email.value);
});

deleteBtn.addEventListener('click', e =>{
    e.preventDefault();
    console.log(fNumber.value);
    console.log(fname.value);
    console.log(username.value);
    console.log(email.value);
});

