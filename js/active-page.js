'use strict';

document.querySelectorAll('.side-bar-menu-item').forEach(x => {
  if (x.href === window.location.href) {
    x.getElementsByClassName('side-bar-ico')[0].classList.add('active');
  }
});

// Script coded with a little help of the following link: (with no jQuery though :) )
// http://www.sweet-web-design.com/wordpress/how-to-add-active-navigation-class-based-on-url-to-menu-item/2401/
