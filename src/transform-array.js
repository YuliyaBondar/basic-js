const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      result = arr.splice(i, 2);
    } else if (arr[i] === '--discard-prev') {
      result = arr.splice(i - 1, 2);
    } else if (arr[i] === '--double-next') {
      result = arr.splice(i, 1, i + 1);
    } else if (arr[i] === '--double-prev') {
      result = arr.splice(i, 1, i - 1);
    }
  }
  return result;
}

module.exports = {
  transform
};
