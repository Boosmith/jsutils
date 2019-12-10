const chai = require('chai');
const dirtyChai = require('dirty-chai');
const { memoize } = require('./index');
chai.use(dirtyChai);
const { expect } = chai;

/**
 * Fibonacci recursive function
 *
 * @param {Number} n
 * @returns Number
 */
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const memoizedFib = memoize(fib);

describe('memoize()', function() {
  describe('test using Fibonacci', function() {
    it('should define fib function', () => {
      expect(typeof fib).equal('function');
    });

    it('should calculate correct fib value for 1', () => {
      expect(memoizedFib(1)).equal(1);
    });

    it('should calculate correct fib value for 2', () => {
      expect(memoizedFib(2)).equal(1);
    });

    it('should calculate correct fib value for 3', () => {
      expect(memoizedFib(3)).equal(2);
    });

    it('should calculate correct fib value for 4', () => {
      expect(memoizedFib(4)).equal(3);
    });

    it('should calculate correct fib value for 15', () => {
      expect(memoizedFib(39)).equal(63245986);
    });
  });
});
