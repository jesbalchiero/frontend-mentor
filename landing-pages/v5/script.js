const menuBtn = document.querySelector('#menu-icon');
const menuHeader = document.querySelector('.menu__list--header');
const menuTriangle = document.querySelector('.menu__triangle');

const showMobileMenu = () => {

    if (menuHeader.classList.contains('active') || menuTriangle.classList.contains('active')) {
        menuHeader.classList.remove('active');
        menuTriangle.classList.remove('active');
    } else {
        menuHeader.classList.add('active');
        menuTriangle.classList.add('active');
    }
}

menuBtn.addEventListener('touchstart', showMobileMenu);