// const hele = document.querySelector(".my-day-head") // you can select the user by using query selector
// console.log(hele.textContent);// to print text content of element
// hele.textContent = "Focus on your night"      // change text content of an element
// console.log(hele.textContent);

// const link1 = document.querySelector("div.my-day-content"); // you can selecct element as well as class, id any thing in html
// console.log(link1);
// link1.style.backgroundColor = "black";
// link1.style.border = "2px solid whitesmoke"
  // you can select all element of same class name


  //1 by get element method
// let contenta = document.getElementsByTagName("a");
// console.log(contenta);          // all element is stored in HTML collection 


// you can iterate
//1 for loop 

// for( let i = 0; i < content.length; i++){
//     content[i].style.color = "yellow"
// }
//2 for of

// for (const con of content) {
//     con.style.color = "green";
// }
// contenta = Array.from(contenta);
// 3. forEach method you have to convert in array
// console.log(Array.isArray(contenta));

// contenta.forEach((con)=>{   // cant do without changing html collection in array
//     con.style.color = "white";
// })

// 2. by select query metod
// let content = document.querySelectorAll("a");     // stored in node list
// console.log(content);
// you can iterate using all three 
// you can change node list in arrays.
//-------------------------------------------------------------------------------------------------------

// INNER HTMl---
// const mydaycondiv = document.querySelector(".my-day-content p"); 
// mydaycondiv.innerHTML += "<button class= \"btn\" >learn more</button>";

//--------------------------------------IMPORTANT-----------------------------------------------------
// create element, remove append , prepend , after, before

// const listtext1 = document.createElement("li");
// console.log(listtext1);
// listtext1.textContent = "do javascript home work today";
// console.log(listtext1);
// const todolist = document.querySelector(".todolist");
// console.log(todolist);
// todolist.append(listtext1);

// const listtext2 = document.createElement("li");
// listtext2.textContent = "do DEV-OPs K8s videos all";
// todolist.prepend(listtext2);

// const random = document.querySelector(".todolist li");
// console.log(random);
// random.remove();
//-------------------------------------------------------------------------------------------------------

// clone using clonemethod.---check out mdm refernce
//-------------------------------------------------------------------------------------------------------

// static list vs live list
// static list --- queryselctor (in node list) vs live list --- getelement (in HTML list).
// in static list if we add nodes using javaScript it will view in node list but if we use get elements it stored in HTML collection and it will viewed the added element this is called live list.
// but usually we use query selctoe to select element

//-------------------------------------------------------------------------------------------------------

// how to get dimension of element."
// const mydayContent = document.querySelector(".my-day-content");
// const info = mydayContent.getBoundingClientRect().width;
// console.log(info);

//--------------------------------------IMPORTANT---------------------------------------------------------
 
// INTRO TO EVENTS
// click
// To event add or fire we have 3 ways --
// 1. html inline (we dont use this very old method.
// 2. {
// const btn1 = document.querySelector(".clicktoaddtodo");
// btn1.onclick = function(){
//   console.log("hello")
// }
// console.dir(btn1);
// }

// 3.----Important 

  // btn1.addEventListener("click", ()=>{
  //   console.log('you clicked me');
  // })

//------------------------------------------------------------------------------------------------------

// this keyword inside event listener

// btn1.addEventListener("click", ()=>{
//     console.log('you clicked me');
//     console.log(this);   // this keyword print window object because we are using arrow function.
//   })

// btn1.addEventListener("click",function(){
//   console.log(this);   // this keyword print button object because we are using function function.
// })

//-------------------------------------------------------------------------------------------------------
// click event on multiple button
// using loop




// const addTask = document.querySelector(".formtodo");
// const contentMainbox = document.querySelector(".my-day-content");
// const inputtodo = document.querySelector(".formtodo input[type='text']");
// const heretoadd = document.querySelector(".todolist");
// addTask.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if (inputtodo.value.trim() != 0) {
//         contentMainbox.style.display = "none";
//         const ulinsideheretoadd = document.createElement("li");
//         const todoinputcontent = inputtodo.value;
//         const addtodo = `<span>${todoinputcontent}</span>
//         <div class="btnsofli">
//             <button class="todobtn check"><img src="/Fly -to do list/images/icons8-circle-48.png" alt=""></button>
//             <button class="todobtn remove"><img src="/Fly -to do list/images/icons8-trash-can-48.png" alt=""></button>
//         </div>`
//     ulinsideheretoadd.innerHTML = addtodo;
//         heretoadd.append(ulinsideheretoadd);
//         inputtodo.value = "";
//     }
// })
// const myday = document.querySelector(".my-daybar");
// myday.addEventListener('click',(e)=>{
//     e.preventDefault();
// })