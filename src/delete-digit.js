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
  const tmp = String(n);
  const newArray = [];
  let str = '';
  for (let i = 0; i < tmp.length; i++) {
    str = tmp.slice(0, i) + tmp.slice(i + 1, tmp.length);
    newArray.push(str);
  }
  const resultArray = newArray.sort((a, b) => b - a);
  return +resultArray[0];
}

module.exports = {
  deleteDigit
};
