import { TimeSpan, Stopwatch } from './index.js'
import test from 'ava'

class Utils {
  static isSame(obj1, obj2) {
    return Object.is(JSON.stringify(obj1), JSON.stringify(obj2))
  }
}

let stopwatch

test.beforeEach(() => {
  stopwatch = new Stopwatch()
})

test('it should allow start a stopwatch', t => {
  t.notThrows(() => stopwatch.start())
})

test('it should not be running before started', t => {
  t.false(stopwatch.isRunning())
})

test('it should be running when started', t => {
  stopwatch.start()
  t.true(stopwatch.isRunning())
})

test('it should not be running after stopped', t => {
  stopwatch.start()
  stopwatch.stop()
  t.false(stopwatch.isRunning())
})

test('it should calculate elapsed time', t => {
  const elapsed = {
    totalSeconds: 1
  }
  t.true(Utils.isSame(elapsed, stopwatch.elapsed))
})
