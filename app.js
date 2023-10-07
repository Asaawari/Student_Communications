// Your web app's Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyA7dfr4NTylLjXTI9mKsD1puiS1zQjTQ7I",
    authDomain: "la-creo.firebaseapp.com",
    databaseURL: "https://la-creo-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "la-creo",
    storageBucket: "la-creo.appspot.com",
    messagingSenderId: "936519683873",
    appId: "1:936519683873:web:cf04c89171d30ade8a3860"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);        

async function pushToFirebase(db) {
    const groupUrl = document.getElementById("groupUrl").addEventListener('click',pushToFirebase);
    const groupName = document.getElementById("groupName").addEventListener('click',pushToFirebase);

    console.log(groupName,groupUrl);

    const docData = {
        name: groupName,
        url: groupUrl
    };

    db.collection('groups')
        .add(docData)
        .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
        console.error("Error adding document: ", error);
        alert("An error occurred while adding the group. Please try again later.");
        });
}