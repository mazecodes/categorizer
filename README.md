<div align="center">
  <h1>Categorizer</h1>
  <p><i>Tiny package to categorize array elements.</i></p>
</div><br>

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Tests](#run-tests)
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

## Run tests

```bash
npm run test
```

## Contributing

All contributions, issues and feature requests are welcome!<br>
Please feel free to check [issues page](https://github.com/mazecodes/categorizer/issues).

1. Fork the project
1. Create your feature branch (`git checkout -b feature/AwesomeFeature`)
1. Commit your changes (`git commit -m "Add Awesome Feature"`)
1. Push to the branch (`git push origin feature/AwesomeFeature`)
1. Open a Pull Request

## Author

Maze Peterson:

- Twitter: [mazecodes](https://twitter.com/mazecodes)
- GitHub: [mazecodes](https://github.com/mazecodes)
- npm: [mazecodes](https://npmjs.com/~mazecodes)

## Show your support

Give a ⭐ if you liked this project!

## License

[MIT](https://github.com/mazecodes/categorizers/blob/master/LICENSE) © Maze Peterson
