const btnToaddToDoList = document.querySelector(".form-to-do");
const inputfield = document.querySelector(".form-to-do  input[type='text']")
const to_do_list = document.querySelector(".to-do-list");
const allTo_do_list = document.querySelector(".all-to-do-list");
const myDayPreviousContent = document.querySelector(".temprorary-content");
const allCheckedTodoList = document.querySelector(".checked-to-do-list");

const createtodo = (takeTextFromInput)=>{
    const listOfEveryInput = document.createElement("li");
    const innerHtmlofList = `<span>${takeTextFromInput}</span>
             <div class="btns-of-Every-List">
                <button class="todobtn check"><img class="check" src="./images/icons8-circle-48.png" alt=""></button>
                <button class="todobtn remove"><img class="remove" src="./images/icons8-trash-can-48.png" alt=""></button>
            </div>`
    listOfEveryInput.innerHTML = innerHtmlofList;
    to_do_list.append(listOfEveryInput);
    inputfield.value = "";
}


// rendering all todolist
let alltodos = [];
if(localStorage.getItem('myday') == null){
    myDayPreviousContent.style.display = "block";
}else {
    myDayPreviousContent.style.display = "none";
    alltodos = JSON.parse(localStorage.getItem('myday'));
}
alltodos.forEach(element => {
    createtodo(element);
});





// rendering all checked todo
let allcheckedtodos = [];
if(localStorage.getItem('mydaycheckeditem') == null){

}else {
    myDayPreviousContent.style.display = "none";
    allcheckedtodos = JSON.parse(localStorage.getItem('mydaycheckeditem'));
}
allcheckedtodos.forEach(element => {
    let doneitem = document.createElement('li');
    doneitem.innerHTML = element;
    allCheckedTodoList.append(doneitem);
});




// adding todos
btnToaddToDoList.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputText = inputfield.value;
    if (inputText.trim() != 0) {
        myDayPreviousContent.style.display = "none";
        const takeTextFromInput = inputText;
        store(takeTextFromInput);
        createtodo(takeTextFromInput);
    }
   
})



// checking and removing todos
allTo_do_list.addEventListener('click',(e)=>{
    e.preventDefault();
    if (e.target.classList.contains("check")) {
        const imageurl = e.target;
        imageurl.style.content = "url('images/icons8-circle-48 (1).png')";

        const checkedbtn = e.target.parentNode;
        checkedbtn.style.cursor = "auto";

        const textvalueOfToDo = e.target.parentNode.parentNode.previousElementSibling;
        textvalueOfToDo.style.textDecoration = "line-through";
        textvalueOfToDo.style.color = "#696969"
        
        const doneitem = e.target.parentNode.parentNode.parentNode;
        const toremoveditemfromdone = doneitem;
        doneitem.remove();
        localStorage.removeItem('myday');

        let allremovedtodo = document.querySelectorAll(".to-do-list li");
        allremovedtodo.forEach(element => {
        const todotext = element.firstChild.textContent;
        store(todotext);
        });

        allCheckedTodoList.append(toremoveditemfromdone);
        const checkRemoved = e.target;
        checkRemoved.classList.remove('check');

        storeinchecked(toremoveditemfromdone.innerHTML);
        
    }
    if (e.target.classList.contains("remove")) {
        const doneToDo = e.target.parentNode.parentNode.parentNode;
        doneToDo.remove()
        if (to_do_list.childElementCount == 0 && allCheckedTodoList.childElementCount == 0) {
            myDayPreviousContent.style.display = "block";
        }
        localStorage.removeItem('myday');
        let allremovedtodo = document.querySelectorAll(".to-do-list li");
        allremovedtodo.forEach(element => {
            const todotext = element.firstChild.textContent;
            store(todotext);
        });
        localStorage.removeItem('mydaycheckeditem');
        let allcheckedremovedtodo = document.querySelectorAll(".checked-to-do-list li");
        allcheckedremovedtodo.forEach(element => {
            const todotext = element.innerHTML;
            storeinchecked(todotext);
        });
    }
})






function store(todotext){
    let todos = [];
    if(localStorage.getItem('myday') != null){
        todos = JSON.parse(localStorage.getItem('myday'));
    }
    todos.push(todotext);
    localStorage.setItem('myday',JSON.stringify(todos));
}

function storeinchecked(todotext2){
    let checkedtodos = [];
    if(localStorage.getItem('mydaycheckeditem') != null){
        checkedtodos = JSON.parse(localStorage.getItem('mydaycheckeditem'));
    }
    checkedtodos.push(todotext2);
    localStorage.setItem('mydaycheckeditem',JSON.stringify(checkedtodos));
}



const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebarforeHamburger = document.querySelector(".side-bar");
hamburgerMenu.addEventListener('click',()=>{
    const hamimg = hamburgerMenu.childNodes[1];
    if(hamimg.classList.contains("closed")){
        hamimg.classList.remove("closed");
        hamimg.src = "./images/icons8-close.svg";
        sidebarforeHamburger.classList.add("side-bar-forSmallWidth");
        console.log(sidebarforeHamburger.classList);
    } else {
        hamimg.classList.add("closed");
        hamimg.src = "./images/icons8-hamburger-menu (1).svg";
        sidebarforeHamburger.classList.remove("side-bar-forSmallWidth");
        console.log(sidebarforeHamburger.classList);
    }
})

const tochangeBackground = document.querySelector(".my-day");
const imagefromLocalStorage = JSON.parse(localStorage.getItem('backgroundImage'));
tochangeBackground.style.backgroundImage = "url("+imagefromLocalStorage+")"
const sett = document.querySelector(".selectBackgroundImage");
sett.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("clicked");
    if(e.target.classList.contains("closed")){
        themechoosing.style.display = "block";
        e.target.classList.remove("closed");
    } else {
        e.target.classList.add("closed");
        themechoosing.style.display = "none";
    }
})



const choosingBackground = document.querySelector(".backGroundImage");
const themechoosing = document.querySelector(".theme");

choosingBackground.addEventListener('click',(e)=>{
    e.preventDefault();
    const urli = e.target.getAttribute('src');
    tochangeBackground.style.backgroundImage = "url("+urli+")"
    localStorage.setItem('backgroundImage',JSON.stringify(urli));
})

