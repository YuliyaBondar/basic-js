const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  let month = date.getMonth();
  switch (month) {
    case '01':
    case '02':
    case '12':
      return 'winter';
    break;
    case '03':
    case '04':
    case '05':
      return 'spring';
    break;
    case '06':
    case '07':
    case '08':
      return 'summer';
    break;
    case '09':
    case '10':
    case '11':
      return 'autumn';
    break;
  }
}

module.exports = {
  getSeason
};
