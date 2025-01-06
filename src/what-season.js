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
  const seasons = {
    'winter': [0, 1, 11],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10]
  }
  let season = '';
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (date instanceof Date) {
    const monthIndex = date.getMonth();
    for (const [key, value] of Object.entries(seasons)) {
      value.find(item => {
        if (item === monthIndex) {
          season = key;
        }
      })
    }
    return season;
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
