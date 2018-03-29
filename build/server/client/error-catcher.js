import log from '../log';

export default (function (error) {
  if (!error) {
    log.error('Uncaught exception with null error object');
    return;
  }

  if (window.location.href.split('/')[2].split(':')[0] !== 'localhost') {
    setTimeout(function () {
      alert('Whoops! Something went wrong. We\'re looking into it,\n        but in the meantime please refresh your browser.');
      document.location.reload(true);
    }, 2000);
  }
});
//# sourceMappingURL=error-catcher.js.map