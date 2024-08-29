const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");

menu.addEventListener("click",()=>{
    menu.classList.toggle("open");
    navBar.classList.toggle("open");
});