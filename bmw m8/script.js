"use strict";

const nav = document.querySelector(".section-navigation");

window.addEventListener("scroll", function () {
  if (this.window.scrollY === 0) {
    nav.style.opacity = 1;
  } else {
    nav.style.opacity = 0.95;
  }
});

/////////////////// MOBILE NAV

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".section-navigation");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
