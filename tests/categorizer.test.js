const { categorize } = require('../src');

describe('Categorizer function', () => {
  it('Should categorize the array', () => {
    const array = [0, 1, 2, 3, 4];
    const categorizedArray = categorize(array, value => {
      if (value % 2 === 0) return 'even';
      return 'odd';
    });

    expect(categorizedArray).toEqual({
      even: [0, 2, 4],
      odd: [1, 3],
    });
  });
});

describe('Categorizer object', () => {
  it('Should categorize the array', () => {
    const array = [0, 1, 2, 3, 4];
    const categorizedArray = categorize(array, {
      even: value => value % 2 === 0,
      odd: value => value % 2 !== 0,
    });

    expect(categorizedArray).toEqual({
      even: [0, 2, 4],
      odd: [1, 3],
    });
  });
});
