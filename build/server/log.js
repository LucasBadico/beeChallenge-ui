var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import minilog from 'minilog';
import rollbar from 'rollbar';

function isClient() {
  return typeof window !== 'undefined';
}

var logInstance = null;

if (isClient()) {
  minilog.enable();
  logInstance = minilog('client');
  var existingErrorLogger = logInstance.error;
  logInstance.error = function (err) {
    window.Rollbar.error(err);
    existingErrorLogger(err);
  };
} else {
  var enableRollbar = false;
  // if (process.env.NODE_ENV === 'production') {
  //   enableRollbar = true
  //   rollbar.init(process.env.ROLLBAR_ACCESS_TOKEN)
  //   const options = {
  //     exitOnUncaughtException: false
  //   }
  //   rollbar.handleUncaughtExceptions(process.env.ROLLBAR_ACCESS_TOKEN, options)
  // }

  minilog.suggest.deny(/.*/, 'production' === 'development' ? 'debug' : 'debug');

  minilog.enable().pipe(minilog.backends.console.formatWithStack).pipe(minilog.backends.console);

  logInstance = minilog('backend');
  var _existingErrorLogger = logInstance.error;
  logInstance.error = function (err) {
    _existingErrorLogger(err.stack ? err.stack : err);
    try {
      if (enableRollbar) {
        if ((typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object') {
          rollbar.handleError(err);
        } else if (typeof err === 'string') {
          rollbar.reportMessage(err);
        } else {
          rollbar.reportMessage('Got backend error with no error message');
        }
      }
    } catch (ex) {
      rollbar.reportMessage('Error converting message to rollbar.');
    }
  };
}

var log = logInstance;
export default log;
//# sourceMappingURL=log.js.map