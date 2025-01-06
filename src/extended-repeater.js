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
  let output = '';

  options.additionRepeatTimes && options.additionSeparator ? output = str.toString() + options.additionRepeatTimes : output = str.toString();
  options.repeatTimes ? output = str.repeat(options.repeatTimes) : output = str.toString();
}

module.exports = {
  repeater
};
