const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");

// function showNotes(){
//     notesContainer.innerHTML = localStorage.getItem("notes");
// }
// showNotes();

// function updateStorage(){
//     localStorage.setItem("notes", notesContainer.innerHTML);

// }

createBtn.addEventListener("click",()=>{

    let inputBox1 = document.createElement("p");
    let img = document.createElement("img");
    inputBox1.className = "inputBox";
    inputBox1.setAttribute("contenteditable","true");
    img.src = "deleteImg.png";
    notesContainer.appendChild(inputBox1).appendChild(img);
})


notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})


document.addEventListener("keydown",event=>{
    if(event.key === "enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});