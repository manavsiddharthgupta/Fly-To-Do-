const notes_app = document.querySelector(".Notes-app");

function createNotes(insert){
    const stickyNotes = document.createElement("textarea");
    stickyNotes.classList.add("sticky-notes")
    const innerHtmlofStickynote = insert;
    stickyNotes.textContent = innerHtmlofStickynote;
    notes_app.prepend(stickyNotes);
    if (notes_app.childElementCount > 1) {
        notes_app.nextElementSibling.style.display = "none";
    }
    const information = stickyNotes.value;
    return information;
    
}

let allstickynotesinstorage = [];
if(localStorage.getItem('stickynote') == null){
}else {
    if (notes_app.childElementCount < 2) {
        notes_app.nextElementSibling.style.display = "block";
    }
    allstickynotesinstorage = JSON.parse(localStorage.getItem('stickynote'));
}
allstickynotesinstorage.reverse();
allstickynotesinstorage.forEach(element => {
    createNotes(element);
});




notes_app.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("add-note-button")){
        const information = createNotes("write something..");
        storesticky(information);
    }
})

notes_app.addEventListener('dblclick',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("sticky-notes")){
        const doDelete = confirm("Do you want to delete your notes");
        if (doDelete) {
            e.target.remove();
            if (notes_app.childElementCount < 2) {
                notes_app.nextElementSibling.style.display = "block";
            }
            update();
        }
    }
})

notes_app.addEventListener('click',()=>{
    const allsticky = document.querySelectorAll("textarea");
    allsticky.forEach((element)=>{
        element.textContent = element.value;
    })
    update();
})

function update() {
    const allsticky = document.querySelectorAll("textarea");
    let elementText = [];
    allsticky.forEach((element)=>{
        elementText.push(element.textContent);
    })
    localStorage.removeItem('stickynote');
    localStorage.setItem('stickynote',JSON.stringify(elementText));
}

function storesticky(information){
    let allNotesInf = [];
    if(localStorage.getItem('stickynote') != null){
        allNotesInf = JSON.parse(localStorage.getItem('stickynote'));
    }
    allNotesInf.push(information);
    localStorage.setItem('stickynote',JSON.stringify(allNotesInf));
}

const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebarforeHamburger = document.querySelector(".side-bar");
console.log(hamburgerMenu);
hamburgerMenu.addEventListener('click',()=>{
    const hamimg = hamburgerMenu.childNodes[1];
    if(hamimg.classList.contains("closed")){
        hamimg.classList.remove("closed");
        hamimg.src = "http://127.0.0.1:5500/Fly%20-to%20do%20list/images/icons8-close.svg";
        sidebarforeHamburger.classList.add("side-bar-forSmallWidth");
        console.log(sidebarforeHamburger.classList);
    } else {
        hamimg.classList.add("closed");
        hamimg.src = "http://127.0.0.1:5500/Fly%20-to%20do%20list/images/icons8-hamburger-menu%20(1).svg";
        sidebarforeHamburger.classList.remove("side-bar-forSmallWidth");
        console.log(sidebarforeHamburger.classList);
    }
})