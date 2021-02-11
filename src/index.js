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

      result[key] = element;
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
      if (categorizer(element)) {
        result[categorizer] = element;
      }
    });
  });

  return result;
};

module.exports = { categorize };
