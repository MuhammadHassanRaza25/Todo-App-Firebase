import { getFirestore, collection, getDocs, addDoc, db, doc, deleteDoc } from  "./firebase.mjs"

var addBtn = document.getElementById('addBtn')
var todoInput = document.getElementById('todoInput')
var showList = document.getElementById('showList')
var editBtn = document.getElementById('editBtn')
var delBtn = document.getElementById('delBtn')

// add data in Firebase Collection 
addBtn.addEventListener('click',async ()=>{
    try {
        const docRef = await addDoc(collection(db, "todoApp"), {
          todoValue: todoInput.value,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
todoInput.value = ''
})

// show data in list
const querySnapshot = await getDocs(collection(db, "todoApp"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);

  showList.innerHTML += `
  <li>${doc.data().todoValue} <span><button id="editBtn">Edit</button> <button id="delBtn">Delete</button></span></li>
`
});

//delete functionality start
delBtn.addEventListener('click',()=>{
        // await deleteDoc(doc(db, "todoApp", id));

        console.log('ok');
        
})
//delete functionality end

