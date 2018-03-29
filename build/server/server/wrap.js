/* This is a function wrapper to correctly
 catch and handle uncaught exceptions in
 asynchronous code. */
import log from '../log';
export default (function (fn) {
  return function () {
    return fn.apply(undefined, arguments).catch(function (ex) {
      console.error(ex);
    });
  };
});
//# sourceMappingURL=wrap.js.map