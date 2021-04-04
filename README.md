# Hyperapp Types Tests

This is the [dtslint](https://github.com/microsoft/dtslint)-based types test suite for the [TypeScript](https://www.typescriptlang.org/) definitions used in [Hyperapp](https://hyperapp.dev/).

> CURRENT STATUS: [The types PR](https://github.com/jorgebucaran/hyperapp/pull/1016) is nearing completion. A copy of the type definitions will be in this repo until Hyperapp officially has them.

## Setup & Usage

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Download or clone this repo into a new folder.
3. Run these CLI commands within that folder:

    ```sh
    npm install
    npm test
    ```

## Unsolved Cases

Some test cases are currently unsolved. They are preceded by a `TODO` comment. To "see" these tests, remove the space after the `$` on the comment lines containing [dtslint assertions](https://github.com/microsoft/dtslint#write-tests).

## Contributing

New test cases are always welcome!

## License

[MIT](LICENSE.md)
