# build-up-1-tools-workshop

Code snippets for LUKSO Build UP #1 - Tools workshop

## Steps

### Init the project

```sh
npm init
```

Keep default values.

### Install dependencies

We install [erc725.js](https://docs.lukso.tech/tools/erc725js/getting-started) and [lsp-factory.js](https://docs.lukso.tech/tools/lsp-factoryjs/getting-started).

```sh
npm i @erc725/erc725.js @lukso/lsp-factory.js
```

We will also need Web3js to generate a wallet and create a provider:

```sh
npm i web3
```

### Install and set up TypeScript

Install TypeScript and ts-node and dotenv:

```sh
npm i -D typescript ts-node dotenv
```

Init TypeScript:

```sh
npx tsc --init
```

Enable `resolveJsonModule` in `tsconfig.json`:

```
"resolveJsonModule": true
```

### Copy .env file

```
cp .env.example .env
```
