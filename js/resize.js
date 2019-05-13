'use strict';

var inputBlock = document.querySelector("#input");
var topBarRight = document.querySelector("#top-bar-right");
var mobileMenuBar = document.querySelector("#mobile-menu-bar");
var sideBar = document.querySelector("#side-bar");
var topBarContent = topBarRight.innerHTML;

var windowWidth = window.innerWidth || document.documentElement.clientWidth;

if (windowWidth > 1200) {
    inputBlock.innerHTML = '';
} else {
    inputBlock.innerHTML = topBarContent;
};


// VARs from script.js
var hamburgerBtn = document.querySelector("#menu-btn");
var mobileHamburgerBtn = document.querySelector("#mobile-menu-btn");
var sideBar = document.querySelector("#side-bar");
var mobileMenu = document.querySelector("#mobile-menu-bar");
var sideBarBrand = document.querySelectorAll(".side-bar-brand")[0];
var sideBarBtns = document.querySelectorAll(".side-bar-menu-slide");
var sideP = document.querySelectorAll(".p-slide");
var wrapper = document.querySelector("#wrapper");

// if (windowWidth <= 992) {
//     mobileMenuBar.innerHTML = sideBar.innerHTML;
// } else {
//     mobileMenuBar.innerHTML = '';
// };
mobileMenuBar.innerHTML = sideBar.innerHTML
// Setup a timer
var timeout;

// Listen for resize events
window.addEventListener('resize', function (event) {
    // If timer is null, reset it to 66ms and run your functions.
    // Otherwise, wait until timer is cleared
    if (!timeout) {
        timeout = setTimeout(function () {

            // Reset timeout
            timeout = null;

            // Run our resize functions
            windowWidth = window.innerWidth || document.documentElement.clientWidth;
            if (windowWidth > 1200) {
                inputBlock.innerHTML = '';
            } else {
                inputBlock.innerHTML = topBarContent;
                mobileMenuBar.innerHTML = sideBar.innerHTML
            };
            if (windowWidth <= 992) {
                inputBlock.innerHTML = topBarContent;
                mobileMenuBar.innerHTML = sideBar.innerHTML;
                hamburgerBtn.classList.remove("active");
                sideBar.classList.remove("active");
                sideBarBrand.classList.remove("hide");
                sideP.forEach(x => {
                    x.classList.remove("hide");
                });
                wrapper.classList.remove("active");
                sideBarBtns.forEach(x => {
                    x.classList.remove("short");
                });
            } else {
                console.log('else');
            };



        }, 66);
    }
}, false);

// For performance, I found this edit to resize listener:
// https://gomakethings.com/event-listener-performance-with-vanilla-js/