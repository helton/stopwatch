"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeSpan = function TimeSpan() {
  _classCallCheck(this, TimeSpan);
};

var Stopwatch = function () {
  function Stopwatch() {
    _classCallCheck(this, Stopwatch);

    this.running = false;
  }

  _createClass(Stopwatch, [{
    key: "start",
    value: function start() {
      this.running = true;
      this.startTime = new Date();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
      this.endTime = new Date();
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }, {
    key: "elapsed",
    get: function get() {
      var elapsedTime = void 0;
      if (this.startTime) {
        var stopTime = this.isRunning() ? this.stopTime : new Date();
        elapsedTime = stopTime - this.startTime;
      }
      return {
        totalSeconds: 1
      };
    }
  }]);

  return Stopwatch;
}();

exports.TimeSpan = TimeSpan;
exports.Stopwatch = Stopwatch;