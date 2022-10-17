const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let add;
  let separatorValue;
  let additionValue;
  if (String(options.addition)) add = options.addition;
  if (options.additionRepeatTimes && options.additionSeparator) {
    additionValue = options.additionSeparator.length;
    add = options.additionSeparator + add;
  } else if (options.additionRepeatTimes) {
    additionValue = 1;
    add =  "|" + add;
  }
  if (options.additionRepeatTimes) add = add.repeat(options.additionRepeatTimes);
  if (add) {
    add = String(add).slice(additionValue);
    str = str + add;
  }
  if (options.separator) {
    separatorValue = options.separator.length;
    str = options.separator + str;
  }
  if (options.separator && options.repeatTimes) {
    str = str.repeat(options.repeatTimes);
  } else if (options.repeatTimes) {
    separatorValue = 1;
    str = "+" + str;
    str = str.repeat(options.repeatTimes);
  }
  str = str.slice(separatorValue);
  return str;
}

module.exports = {
  repeater
};
