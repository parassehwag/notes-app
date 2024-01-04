const createBtn = document.querySelector(".button");
const container = document.querySelector(".container");


createBtn.addEventListener("click",()=>{
    let notesArea = document.createElement("div");
    let inputBox = document.createElement("textarea");
    let img = document.createElement("img");
    notesArea.className = "notesArea";
    inputBox.setAttribute("name","Note");
    inputBox.setAttribute("placeholder","Enter your notes (max words - 150)");
    inputBox.setAttribute("rows","5");
    inputBox.setAttribute("cols","40" );
    inputBox.setAttribute("maxlength","150");
    container.appendChild(notesArea).appendChild(inputBox);
    notesArea.appendChild(img);
    img.src= "Images/—Pngtree—delete tool icon_4438072.png";
    img.className=("deleteNote");
})


container.addEventListener("click",function(e){
    console.log(e.target);
    if(e.target.className=== "deleteNote"){
        e.target.parentElement.remove();
    }
})
