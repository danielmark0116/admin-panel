'use strict';

const sideBar = document.querySelector('#side-bar');

document.querySelector('#menu-btn').addEventListener('click', function(x) {
  this.classList.toggle('active');
  sideBar.classList.toggle('active');
  document.querySelector('.side-bar-brand').classList.toggle('hide');
  document.querySelectorAll('.p-slide').forEach(function(x) {
    x.classList.toggle('hide');
  });
  document.querySelector('#wrapper').classList.toggle('active');
  document.querySelectorAll('.side-bar-menu-slide').forEach(function(x) {
    x.classList.toggle('short');
  });
});

// MOBILE MDOE <992px
document
  .querySelector('#mobile-menu-btn')
  .addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('#mobile-menu-bar').classList.toggle('active');
  });

//   backup

// const hamburgerBtn = document.querySelector('#menu-btn');
// const mobileHamburgerBtn = document.querySelector('#mobile-menu-btn');
// const mobileMenu = document.querySelector('#mobile-menu-bar');
// const sideBarBrand = document.querySelector('.side-bar-brand');
// const sideBarBtns = document.querySelectorAll('.side-bar-menu-slide');
// const sideP = document.querySelectorAll('.p-slide');
// const wrapper = document.querySelector('#wrapper');
