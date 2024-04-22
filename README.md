## Overview

Marketplace has dependencies on multiple technologies.

* [Ganache](https://trufflesuite.com/ganache/) - private Blockchain, to run application localy

## To run the app
1. run `npm install` to install dependencies

2. Then migrate a contract to Ganache, contract can be found in the `contracts` folder. It's called `CourseMarketplace.sol` run the command `truffle compile`

* To migrate the contract run `truffle migrate` in the terminal while Ganache network is setup and running.

* Do not forget to link `trufle-config.js` with Ganache, just go to `config` and click `Add Project`

3. Now everything is setup and you can test out the app.

* Run `npm run dev` in the terminal. App will run at `localhost:3000`

## UI Screenshots
<p align="center">
  <img src="https://github.com/vedantkadam/blockchain_miniproject/assets/83024561/84226333-811b-4e03-aaa6-bc355b81adab" alt="Image 1">
</p>

<p align="center">
  <img src="https://github.com/vedantkadam/blockchain_miniproject/assets/83024561/04263da7-419c-4999-bfce-74bd31890ab3" alt="Image 2">
</p>

<p align="center">
  <img src="https://github.com/vedantkadam/blockchain_miniproject/assets/83024561/2ff35cd6-386c-4b70-9347-362ba08c222b" alt="Image 3">
</p>

<p align="center">
  <img src="https://github.com/vedantkadam/blockchain_miniproject/assets/83024561/21fbf067-c88a-48fa-b1d8-a110ffd9887b" alt="Image 4">
</p>




