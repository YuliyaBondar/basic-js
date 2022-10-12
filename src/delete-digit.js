const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = Array.from(String(n), Number);
  let min = Math.min.apply(null, array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === min) {
      array.splice(i, 1);
      break;
    }
  }
  let stringNew = array.join('');
  return Number(stringNew);
}

module.exports = {
  deleteDigit
};
