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
