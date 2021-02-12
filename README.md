<div align="center">
  <h1>Categorizer</h1>
  <p><i>Tiny package to categorize array elements.</i></p>
</div><br>

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Author](#author)
- [Support](#show-your-support)
- [License](#license)

## Install

npm:

```bash
npm install categorizer
```

Yarn:

```bash
yarn add categorizer
```

GitHub:

```bash
git clone https://github.com/mazecodes/categorizer.git
```

## Usage

Using with a categorizer object:

```javascript
const { categorize } = require('categorizer');

const array = [0, 1, 2, 3, 4];

const result = categorize(array, {
  even(value) {
    return value % 2 === 0;
  },
  odd(value) {
    return value % 2 !== 0;
  },
});
```

Using with a categorizer function:

```javascript
const { categorize } = require('categorizer');

const array = [0, 1, 2, 3, 4];

const result = categorize(array, value => {
  if (value % 2 === 0) return 'even';
  return 'odd';
});
```
