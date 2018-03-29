var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { createServer } from 'http';

export var getAvailablePort = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(startingAt) {
        var getNextAvailablePort;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        getNextAvailablePort = function getNextAvailablePort(currentPort, fn) {
                            var server = createServer();
                            server.listen(currentPort, function (_) {
                                server.once('close', function (_) {
                                    fn(currentPort);
                                });
                                server.close();
                            });
                            server.on('error', function (_) {
                                getNextAvailablePort(++currentPort, fn);
                            });
                        };

                        return _context.abrupt('return', new Promise(function (resolve) {
                            getNextAvailablePort(startingAt, resolve);
                        }));

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function getAvailablePort(_x) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=getAvailablePort.js.map