'use strict';

document.querySelectorAll('.side-bar-menu-item').forEach(function(x) {
  if (x.href === window.location.href) {
    x.getElementsByClassName('side-bar-ico')[0].classList.add('active');
    x.classList.add('active');
  }
});

// console.log(window.location.href);
// console.log(
//   document
//     .querySelectorAll('.side-bar-menu-item')[0]
//     .href.endsWith('index.html')
// );
