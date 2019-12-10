/**
 * Memoizes recursive function
 *
 * @param {Function} fn
 * @param {Object} [cache={}]
 */
const memoize = (fn, cache = {}) => (...args) =>
  cache[args] ? cache[args] : (cache[args] = fn.apply(null, args));

module.exports = memoize;
