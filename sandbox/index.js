const { categorize } = require('../src');

const array = [1, 2, 3, 4, 5, 6];

const result1 = categorize(array, value => {
  if (value % 2 === 0) return 'even';
  return 'odd';
});

const result2 = categorize(array, {
  even(value) {
    return value % 2 === 0;
  },
  odd(value) {
    return value % 2 !== 0;
  },
});

console.log(`Categorizer function`, result1);
console.log(`Categorizer object`, result2);
