import { getFirestore, collection, getDocs, addDoc, db, doc, deleteDoc, onSnapshot, updateDoc } from  "../Firebase/firebase.mjs"

let addBtn = document.getElementById('addBtn')
let todoInput = document.getElementById('todoInput')
let showList = document.getElementById('showList')

// add data in Firebase Collection //
addBtn.addEventListener('click',async ()=>{
    try {
        const docRef = await addDoc(collection(db, "todoApp"), {
          todoValue: todoInput.value,
        });
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
todoInput.value = ''
})
// add data in Firebase Collection Fully Explain:
// addDoc main collection or object hota hai. 
// collection se main 1st db 2nd collection ka xyzname dete hain. // or object main wohi key&value main data set karte hain.


// Get&Show real time data from Firebase Database //
let getTodoData = ()=>{
  onSnapshot(collection(db, "todoApp"), (snapshot)=>{

  showList.innerHTML = ''
  snapshot.forEach((doc)=>{
    // console.log("DATA ==>",doc.id, doc.data()); 
   let {todoValue} = doc.data()
   showList.innerHTML += `
    <li>${todoValue} <span><button onclick="editTodo('${doc.id}')"><i class="bi bi-pencil-square"></i></button> <button onclick="delTodo('${doc.id}')"><i class="bi bi-trash-fill"></i></button></span></li>
    `
  })

  })
}
getTodoData()
// Get&Show real time data from Firebase Database Fully Explain:
// onSnapshot se real time data milta hai. real time means without reload data ayga.
// showList.innerHTML = '' agar list khali nhi karenge to data repeat ho ke show hoga.
// collection se data lene ke liye forEach lage ga or doc.data() karke data milega.
// or doc.id karke document ki id bhi easily milti hai.


// Delete doc from Firebase Database //
let delTodo = async (docId)=>{
  await deleteDoc(doc(db, "todoApp", docId));
  // console.log(docId);
}
window.delTodo = delTodo;  // globaly set kia hai.
// Delete doc from Firebase Database Fully Explain: 
// hamny delTodo ke onclick main '${doc.id}' di hai or string'' islye lagaya hai ke id string main ay. agar string'' nhi dete to ye id ko variable samjhe ga.
// or apne function main docId se id get karke delete ki hai.


// Edit doc from Firebase Database //
let editTodo = async (docId)=>{
// sweet alert start
let editVal = await Swal.fire({
  title: "Edit Your Todo",
  input: "text",
  inputPlaceholder: 'Enter Todo',
  showCancelButton: true,
  confirmButtonColor: "#3a47d5",
  cancelButtonColor: "#d33",
  confirmButtonText: "Edit Todo"
}) 
const editedVal = editVal.value;
// console.log(editedVal);
// sweet alert end

// edit doc start
  const ref = doc(db, "todoApp", docId);
  await updateDoc(ref, {
    todoValue: editedVal,
  });
// edit doc end
}
window.editTodo = editTodo;  // globaly set kia hai.
// Edit doc from Firebase Database Fully Explain:
// hamny editTodo ke onclick main '${doc.id}' di hai or string'' islye lagaya hai ke id string main ay. agar string'' nhi dete to ye id ko variable samjhe ga.
// or apne function main docId se id get karke sweet alert ke input se edit ki hai.