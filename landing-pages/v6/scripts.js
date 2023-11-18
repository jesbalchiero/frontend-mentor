"use strict";

const BTN = document.querySelector(".icon-hamburger");
const NAV = document.querySelector(".navbar-nav");

BTN.addEventListener("click", function () {
  BTN.classList.toggle("active");
  NAV.classList.toggle("d-none-mobile");
});