'use strict';

document.querySelectorAll('.btn-tab').forEach(x => {
  x.addEventListener('click', () => {
    x.classList.toggle('active');
  });
});
