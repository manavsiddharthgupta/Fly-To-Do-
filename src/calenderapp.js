const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate(); // this will give the last date of every month
  const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();// this will give the last date of previous month
  const firstDayIndex = date.getDay();    // this will give index value of first day of the current month
  const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay(); // last day index of the current month
  const nextDays = 7 - lastDayIndex - 1;  // remaining days to be filled in current month
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();
  let days = "";
  for (let x = firstDayIndex; x > 0; x--) { // this will fullfil the previous date in current calender view
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) { // all date
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="today">${i}</div>`;  // add class for the current date
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {  // fulfill the after date
    days += `<div class="next-date">${j}</div>`;
  }
  monthDays.innerHTML = days;  // add the inner html
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebarforeHamburger = document.querySelector(".side-bar");
console.log(hamburgerMenu);
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