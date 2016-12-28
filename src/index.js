class TimeSpan {

}

class Stopwatch {
  constructor() {
    this.running = false
  }

  start() {
    this.running = true
    this.startTime = new Date()
  }

  stop() {
    this.running = false
    this.endTime = new Date()
  }

  isRunning() {
    return this.running
  }

  get elapsed() {
    let elapsedTime
    if (this.startTime) {
      const stopTime = this.isRunning() ? this.stopTime : new Date()
      elapsedTime = stopTime - this.startTime
    }
    return {
      totalSeconds: 1
    }
  }

}

export { TimeSpan, Stopwatch };
