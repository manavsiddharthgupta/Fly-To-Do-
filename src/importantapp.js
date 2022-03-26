const btnToaddToDoList = document.querySelector(".form-to-do-imp");
const inputfield = document.querySelector(".form-to-do-imp  input[type='text']")
const to_do_list = document.querySelector(".to-do-list-imp");
const allTo_do_list = document.querySelector(".all-to-do-list-imp");
const myDayPreviousContent = document.querySelector(".temprorary-content-imp");
const allCheckedTodoList = document.querySelector(".checked-to-do-list-imp");

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
let alltodos = [];
if(localStorage.getItem('itemsimp') == null){
            
}else {
    myDayPreviousContent.style.display = "none";
    alltodos = JSON.parse(localStorage.getItem('itemsimp'));
}
alltodos.forEach(element => {
    console.log(element);
    createtodo(element);
});

let allcheckedtodos = [];
if(localStorage.getItem('mydaycheckeditemimp') == null){

}else {
    myDayPreviousContent.style.display = "none";
    allcheckedtodos = JSON.parse(localStorage.getItem('mydaycheckeditemimp'));
}
allcheckedtodos.forEach(element => {
    let doneitem = document.createElement('li');
    doneitem.innerHTML = element;
    allCheckedTodoList.append(doneitem);
});

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

allTo_do_list.addEventListener('click',(e)=>{
    e.preventDefault();
    if (e.target.classList.contains("check")) {
        const imageurl = e.target;
        imageurl.style.content = "url('images/icons8-circle-48 (1).png')";
        const textvalueOfToDo = e.target.parentNode.parentNode.previousElementSibling;
        textvalueOfToDo.style.textDecoration = "line-through";
        textvalueOfToDo.style.color = "#696969"
        if (true) {
            const doneitem = e.target.parentNode.parentNode.parentNode;
            const toremoveditemfromdone = doneitem;
            doneitem.remove();;

            localStorage.removeItem('itemsimp');
            let allremovedtodo = document.querySelectorAll(".to-do-list-imp li");
            allremovedtodo.forEach(element => {
            const todotext = element.firstChild.textContent;
            store(todotext);
            });
            allCheckedTodoList.append(toremoveditemfromdone);
            const checkRemoved = e.target;
            checkRemoved.classList.remove('check');
            storeinchecked(toremoveditemfromdone.innerHTML);
        }
        
    }
    if (e.target.classList.contains("remove")) {
        const doneToDo = e.target.parentNode.parentNode.parentNode;
        doneToDo.remove()
        if (to_do_list.childElementCount == 0 && allCheckedTodoList.childElementCount == 0) {
            myDayPreviousContent.style.display = "block";
        }
        localStorage.removeItem('itemsimp');
        let allremovedtodo = document.querySelectorAll(".to-do-list-imp li");
        allremovedtodo.forEach(element => {
            const atketext = element.firstChild.textContent;
            store(atketext);
        });
        localStorage.removeItem('mydaycheckeditemimp');
        let allcheckedremovedtodo = document.querySelectorAll(".checked-to-do-list-imp li");
        allcheckedremovedtodo.forEach(element => {
            const todotext = element.innerHTML;
            storeinchecked(todotext);
        });
    }
})

function store(takeTextFromInput){
    let todos = [];
        if(localStorage.getItem('itemsimp') == null){
            
        }else {
            todos = JSON.parse(localStorage.getItem('itemsimp'));
        }
        todos.push(takeTextFromInput);
        localStorage.setItem('itemsimp',JSON.stringify(todos));
}

function storeinchecked(todotext){
    let checkedtodos = [];
    if(localStorage.getItem('mydaycheckeditemimp') != null){
        checkedtodos = JSON.parse(localStorage.getItem('mydaycheckeditemimp'));
    }
    console.log(checkedtodos);
    checkedtodos.push(todotext);
    localStorage.setItem('mydaycheckeditemimp',JSON.stringify(checkedtodos));
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