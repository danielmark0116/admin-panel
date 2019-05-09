'use strict'


var hamburgerBtn = document.querySelector("#menu-btn");
var sideBar = document.querySelector("#side-bar");
var wrapper = document.querySelector("#wrapper");

hamburgerBtn.addEventListener("click", x => {
    hamburgerBtn.classList.toggle("active");
    sideBar.classList.toggle("active");
    wrapper.classList.toggle("active");
})