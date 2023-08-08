"use strict";

const nav = document.querySelector(".section-navigation");

window.addEventListener("scroll", function () {
  if (this.window.scrollY === 0) {
    nav.style.opacity = 1;
  } else {
    nav.style.opacity = 0.95;
  }
});

/////////////////// MOBILE NAV .nav-open

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".section-navigation");

const info = document.querySelector(".section-info");
const portfolio = document.querySelector(".portfolio");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  info.classList.toggle("mobile");
  portfolio.classList.toggle("mobile");
});

// reveal

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function reveal2() {
  var reveals = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);

function reveal3() {
  var reveals = document.querySelectorAll(".reveal3");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal3);
