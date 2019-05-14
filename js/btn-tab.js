'use strict';

var btnTab = document.querySelectorAll('.btn-tab');

btnTab.forEach(x => {
    x.addEventListener('click', () => {
        x.classList.toggle("active");
    })
})