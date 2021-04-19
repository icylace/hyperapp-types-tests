# Hyperapp Types Tests

This is the [dtslint](https://github.com/microsoft/dtslint)-based types test suite for the [TypeScript](https://www.typescriptlang.org/) definitions used in [Hyperapp](https://hyperapp.dev/). A copy of the type definitions is kept here for the testing and may also include proposed changes.

## Setup & Usage

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Download or clone this repo into a new folder.
3. Run these CLI commands within that folder:

   ```sh
   npm install
   npm test
   ```

## Unsolved Cases

Some test cases are currently unsolved and will be shown when you run `npm test`.

## Why is [dtslint](https://github.com/microsoft/dtslint) used intead of [tsd](https://github.com/SamVerschueren/tsd)?

dtslint makes it convenient to have a local copy of the type definitions for testing. This is especially useful for quickly testing out experimental changes.

## Contributing

New test cases are always welcome!

## License

[MIT](LICENSE.md)
