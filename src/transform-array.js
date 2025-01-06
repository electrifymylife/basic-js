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
  let transformed = arr;

  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");

  for (let i = 0; i <= transformed.length; i++) {
    if (transformed[i+1] && transformed[i] === '--discard-next') {
      transformed.splice(i, 2);
    } else if (!transformed[i+1] && transformed[i] === '--discard-next') {
      transformed.splice(i, 1);
    }
    if (transformed[i-1] && transformed[i] === '--discard-prev') {
      transformed.splice(i-1, 2);
    } else if (!transformed[i-1] && transformed[i] === '--discard-prev') {
      transformed.splice(i, 1);
    }
    if (transformed[i+1] && transformed[i] === '--double-next') {
      transformed[i] = transformed[i+1];
      transformed[i+1] = transformed[i+1];
    } else if (!transformed[i+1] && transformed[i] === '--double-next') {
      transformed.splice(i, 1);
    }
    if (transformed[i-1] && transformed[i] === '--double-prev') {
      transformed[i] = transformed[i-1];
      transformed[i-1] = transformed[i-1];
    } else if (!transformed[i-1] && transformed[i] === '--double-prev') {
      transformed.splice(i, 1);
    }
  }

  return transformed;
}

module.exports = {
  transform
};
