const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const newArray = domains.map(currentValue => currentValue.split('.').reverse());
  const outputObject = {};
  newArray.forEach((array) => {
    let tmp = '';
    array.forEach((element) => {
      tmp = tmp + `.${element}`;
      if (tmp in outputObject) {
        outputObject[tmp]++;
      } else {
        outputObject[tmp] = 1;
      };
    });
    tmp = '';
  });
  return outputObject;
}

module.exports = {
  getDNSStats
};
