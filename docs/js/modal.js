// OPEN & CLOSE functions

function closeModal() {
  document.querySelectorAll('.modal').forEach(function(x) {
    x.classList.remove('show');
  });
}

function openModal(modalName) {
  document.querySelector(modalName).classList.add('show');
}

// CLOSE EACH and every modal with X icon
document.querySelectorAll('.js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

// ----------------------
// MODALS: -----------
// ----------------------

// QUIT modal - LAYOUT nunjucks
// document.querySelector('#open-quit').addEventListener('click', function(e) {
//   e.preventDefault();
//   openModal('#modal-quit');
// });
document.querySelectorAll('.open-quit').forEach(function(x) {
  x.addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#modal-quit');
  });
});

// LOGIN modal - LAYOUT nunjucks
// document.querySelector('#open-login').addEventListener('click', function(e) {
//   e.preventDefault();
//   openModal('#modal-login');
// });
document.querySelectorAll('.open-login').forEach(function(x) {
  x.addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#modal-login');
  });
});

// CHAT modal - LAYOUT nunjucks
// document.querySelector('#open-chat').addEventListener('click', function(e) {
//   // e.preventDefault();
//   openModal('#modal-chat');
// });
document.querySelectorAll('.open-chat').forEach(function(x) {
  x.addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#modal-chat');
  });
});

// URL modal - LINKs nunjucks
document.querySelectorAll('.open-links').forEach(function(x) {
  x.addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#modal-links');
  });
});

// BANNERS modal - BANNER nunjucks
document.querySelectorAll('.open-banners').forEach(function(x) {
  x.addEventListener('click', function(e) {
    e.preventDefault();
    openModal('#modal-banners');
  });
});
