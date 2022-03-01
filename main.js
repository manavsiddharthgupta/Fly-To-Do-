const btnToaddToDoList = document.querySelector(".form-to-do");
const inputfield = document.querySelector(".form-to-do  input[type='text']")
const allTo_do_list = document.querySelector(".to-do-list");
const myDayPreviousContent = document.querySelector(".my-day-content");
btnToaddToDoList.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputText = inputfield.value;
    if (inputText.trim() != 0) {
        myDayPreviousContent.style.display = "none";
        const takeTextFromInput = inputText;
        const listOfEveryInput = document.createElement("li");
        const innerHtmlofList = `<span>${takeTextFromInput}</span>
                 <div class="btns-of-Every-List">
                    <button class="todobtn check"><img class="check" src="/Fly -to do list/images/icons8-circle-48.png" alt=""></button>
                    <button class="todobtn remove"><img class="remove" src="/Fly -to do list/images/icons8-trash-can-48.png" alt=""></button>
                </div>`
        listOfEveryInput.innerHTML = innerHtmlofList;
        allTo_do_list.append(listOfEveryInput);
        inputfield.value = "";
    }
   
})
allTo_do_list.addEventListener('click',(e)=>{
    e.preventDefault();
    if (e.target.classList.contains("check")) {
        const textvalueOfToDo = e.target.parentNode.parentNode.previousElementSibling;
        textvalueOfToDo.style.textDecoration = "line-through"
    }
    if (e.target.classList.contains("remove")) {
        const doneToDo = e.target.parentNode.parentNode.parentNode;
        doneToDo.remove()
        if (allTo_do_list.childElementCount == 0) {
            myDayPreviousContent.style.display = "block";
        }
    }
})

const rootnode = document.getRootNode();
const htmlnode = rootnode.childNodes[1];
console.log(htmlnode.childNodes[2].childNodes[3].childNodes);