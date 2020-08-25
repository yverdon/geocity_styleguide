/* eslint-disable */
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('[data-set-direction]');

  // Polyfill for IE11 mostly
  if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  function setDirection(dir) {
    // Get the element everytime since it changes with navigation
    var preview = document.querySelector('.Preview-iframe');

    if (preview) {
      var stylesheet = preview.contentDocument.querySelector('#stylesheet');

      if (stylesheet) {
        // There’s a stylesheet, let’s replace the src to be faster
        preview.contentDocument.dir = dir;
        stylesheet.href = stylesheet.href.replace(/(ltr|rtl)/, dir);
      } else {
        // Dev mode, it’s a style tag, let’s reload the preview
        preview.contentWindow.location.reload();
      }
    }

    updateButtons(dir);
  }

  function updateButtons(dir) {
    buttons.forEach(function(button) {
      if (button.dataset.setDirection === dir) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  function handleSetDirection(e) {
    e.preventDefault();

    var dir = e.currentTarget.dataset.setDirection;
    setDirection(dir);

    if (window.localStorage) {
      localStorage.setItem('direction', dir);
    }
  }

  // Bind buttons
  buttons.forEach(function(button) {
    button.addEventListener('click', handleSetDirection);
  });

  // Ensure buttons correspond to current direction
  if (window.localStorage && localStorage.getItem('direction')) {
    updateButtons(localStorage.getItem('direction'));
  }
});
