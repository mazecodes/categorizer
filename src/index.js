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
