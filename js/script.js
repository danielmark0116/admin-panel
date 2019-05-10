'use strict'


var hamburgerBtn = document.querySelector("#menu-btn");
var sideBar = document.querySelector("#side-bar");
var sideBarBrand = document.querySelectorAll(".side-bar-brand")[0];
var sideBarBtns = document.querySelectorAll(".side-bar-menu-slide");
var sideP = document.querySelectorAll(".p-slide");
var wrapper = document.querySelector("#wrapper");

hamburgerBtn.addEventListener("click", x => {
    hamburgerBtn.classList.toggle("active");
    sideBar.classList.toggle("active");
    sideBarBrand.classList.toggle("hide");
    sideP.forEach(x => {
        x.classList.toggle("hide");
    });
    wrapper.classList.toggle("active");
    sideBarBtns.forEach(x => {
        x.classList.toggle("short");
    })
})