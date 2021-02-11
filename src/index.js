/**
 * Categorize the given array
 *
 * @param {Array} array - Array to categorize
 * @param {(Object|Function)} categorizers - The categorizer, can be either function or object
 * @returns {Object} - A categorized object
 *
 * @example
 *   categorize([0, 1, 2, 3, 4], element => {
 *     if (element % 2 === 0) return 'even';
 *     return 'odd';
 *   })
 *
 *   categorize([0, 1, 2, 3, 4], {
 *     odd: element => element % 2 !== 0,
 *     even: element => element % 2 === 0,
 *   })
 */
const categorize = (array, categorizers) => {
  const result = {};

  /**
   * Categorizer function
   *
   * @example
   *   element => {
   *     if (element % 2 === 0) return 'even';
   *     return 'odd';
   *   }
   */
  if (typeof categorizers === 'function') {
    array.forEach(element => {
      const key = categorizers(element);

      if (!result[key]) {
        result[key] = [];
      }

      result[key].push(element);
    });

    return result;
  }

  /**
   * Categorizer object
   *
   * @example
   *   {
   *     odd: element => element % 2 !== 0,
   *     even: element => element % 2 === 0,
   *   }
   */
  array.forEach(element => {
    Object.keys(categorizers).forEach(categorizer => {
      if (categorizers[categorizer](element)) {
        if (!result[categorizer]) {
          result[categorizer] = [];
        }

        result[categorizer].push(element);
      }
    });
  });

  return result;
};

module.exports = { categorize };
