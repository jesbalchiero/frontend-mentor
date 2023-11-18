const navHamburger = document.getElementById("nav-hamburger");
const navClose = document.getElementById("nav-close");
const navLinks = document.getElementById("js-navLinksMobile");

const toggleNavMenu = () => {
    navHamburger.classList.toggle("display-none");
    navClose.classList.toggle("display-none");
    navLinks.classList.toggle("display-none");
}

navHamburger.addEventListener("click", toggleNavMenu);
navClose.addEventListener("click", toggleNavMenu);