  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc, onSnapshot, updateDoc } from  "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_KYvfQCD4N3-vH3uOGVThB6AfB2_iZuw",
    authDomain: "todo-app-918e2.firebaseapp.com",
    projectId: "todo-app-918e2",
    storageBucket: "todo-app-918e2.appspot.com",
    messagingSenderId: "1065420546358",
    appId: "1:1065420546358:web:e628c27ed7f8adebd0d397"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{
    app,
    getFirestore,
    db,
    getDocs,
    addDoc,
    collection,
    doc,
    deleteDoc,
    onSnapshot,
    updateDoc
  }