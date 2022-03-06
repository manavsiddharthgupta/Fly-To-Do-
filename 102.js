const notes_app = document.querySelector(".Notes-app");

notes_app.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("add-note-button")){
        const stickyNotes = document.createElement("textarea");
        stickyNotes.classList.add("sticky-notes")
        const innerHtmlofStickynote = "Write Some notes..";
        stickyNotes.innerHTML = innerHtmlofStickynote;
        notes_app.prepend(stickyNotes);
        if (notes_app.childElementCount > 1) {
            notes_app.nextElementSibling.style.display = "none";
        }
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
            
        }
    }
})
