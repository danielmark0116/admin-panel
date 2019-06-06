document
  .querySelector('input[type="range"]')
  .addEventListener('input', function(x) {
    document.querySelector('.present-value').innerHTML = this.value;
  });
