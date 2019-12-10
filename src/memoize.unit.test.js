const chai = require('chai');
const dirtyChai = require('dirty-chai');

chai.use(dirtyChai);
const { expect } = chai;

/**
 * Fibonacci recursive function
 *
 * @param {Number} n
 * @returns Number
 */
function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

describe('memoize()', function() {
  describe('test using Fibonacci', function() {
    it('should define fib function', () => {
      expect(typeof fib).equal('function');
    });

    it('should calculate correct fib value for 1', () => {
      expect(fib(1)).equal(1);
    });

    it('should calculate correct fib value for 2', () => {
      expect(fib(2)).equal(1);
    });

    it('should calculate correct fib value for 3', () => {
      expect(fib(3)).equal(2);
    });

    it('should calculate correct fib value for 4', () => {
      expect(fib(4)).equal(3);
    });

    it('should calculate correct fib value for 15', () => {
      expect(fib(39)).equal(63245986);
    });
  });
});
