/**
 * Make a parameter required
 *
 * @param {String} name - The name of the parameter
 * @returns {void}
 *
 * @example
 *   const example = (name = required('name')) => {
 *     console.log(name);
 *   };
 */
const required = name => {
  throw new Error(`${name} is required`);
};

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
const categorize = (
  array = required('array'),
  categorizers = required('categorizers')
) => {
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

      if (['string', 'number'].includes(typeof key)) {
        if (!result[key]) {
          result[key] = [];
        }

        result[key].push(element);
      }
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
      if (typeof categorizers[categorizer] !== 'function') {
        return;
      }

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
