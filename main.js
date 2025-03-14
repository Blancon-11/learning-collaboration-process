const menuBtn =document.getElementById("menu-btn");
const navLinks =document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click",(e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line"); 
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

scrollRevealOption().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
scrollRevealOption().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
});
scrollRevealOption().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
scrollRevealOption().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
});