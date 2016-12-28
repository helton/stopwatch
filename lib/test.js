'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./index.js');

var _ava = require('ava');

var _ava2 = _interopRequireDefault(_ava);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: 'isSame',
    value: function isSame(obj1, obj2) {
      return Object.is(JSON.stringify(obj1), JSON.stringify(obj2));
    }
  }]);

  return Utils;
}();

var stopwatch = void 0;

_ava2.default.beforeEach(function () {
  stopwatch = new _index.Stopwatch();
});

(0, _ava2.default)('it should allow start a stopwatch', function (t) {
  t.notThrows(function () {
    return stopwatch.start();
  });
});

(0, _ava2.default)('it should not be running before started', function (t) {
  t.false(stopwatch.isRunning());
});

(0, _ava2.default)('it should be running when started', function (t) {
  stopwatch.start();
  t.true(stopwatch.isRunning());
});

(0, _ava2.default)('it should not be running after stopped', function (t) {
  stopwatch.start();
  stopwatch.stop();
  t.false(stopwatch.isRunning());
});

(0, _ava2.default)('it should calculate elapsed time', function (t) {
  var elapsed = {
    totalSeconds: 1
  };
  t.true(Utils.isSame(elapsed, stopwatch.elapsed));
});