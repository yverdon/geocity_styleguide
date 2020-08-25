/* eslint-disable */
document.addEventListener('DOMContentLoaded', function() {

  var previewIframe;
  var previewIframeWindow;
  var previewSize;

  /**
   * Update the current preview width/height in the component header
   */
  function updateSize() {
    previewSize.innerText = previewIframeWindow.innerWidth + ' × ' + previewIframeWindow.innerHeight;
  }

  /**
   * Store the required elements and add listeners to calculate preview size
   */
  function updateTargets() {
    previewIframe = document.querySelector('.Preview-iframe');
    previewIframeWindow = previewIframe ? previewIframe.contentWindow : null;
    previewSize = document.querySelector('.Preview-size');

    if (previewIframe) {
      previewIframe.addEventListener('load', updateSize);
    }

    if (previewIframeWindow) {
      previewIframeWindow.addEventListener('resize', updateSize);
    }
  }

  /**
   * Update targets on dynamic component change (fractal pjax)
   */
  fractal.events.on('main-content-loaded', function() {
    updateTargets();
  });

  /**
   * Set targets on page load
   */
  updateTargets();

});
