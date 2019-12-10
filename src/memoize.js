/**
 * Memoizes recursive function
 *
 * @param {Function} fn
 * @param {Object} [cache={}]
 */
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

module.exports = memoize;
