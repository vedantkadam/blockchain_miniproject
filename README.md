## Overview

Marketplace has dependencies on multiple technologies.

* [Ganache](https://trufflesuite.com/ganache/) - private Blockchain, to run application localy

## To run the app
1. run `npm install` to install dependencies

2. Then migrate a contract to Ganache, contract can be found in the `contracts` folder. It's called `CourseMarketplace.sol`

* To migrate the contract run `truffle migrate` in the terminal while Ganache network is setup and running.

* Do not forget to link `trufle-config.js` with Ganache, just go to `config` and click `Add Project`

* `keys.json` must be created if you want to deploy to Ropsten, if not, just remove import of `keys.json` from `trufle-config.js` and also comment out `ropsten` configuration

3. Now everything is setup and you can test out the app.

* Run `npm run dev` in the terminal. App will run at `localhost:3000`

![methodology](https://github.com/Allanrodriques/DLP-Final-Year/assets/68966594/9dfac61e-1d9b-4928-a454-2d6c04b884d2)
![login](https://github.com/Allanrodriques/DLP-Final-Year/assets/68966594/36a2e5f0-0021-4f35-af35-ffb9b7b7d555)
![marketplace](https://github.com/Allanrodriques/DLP-Final-Year/assets/68966594/5e6a51ac-556d-4426-813a-cd311f478b93)
![mycourses](https://github.com/Allanrodriques/DLP-Final-Year/assets/68966594/ff2df208-cca1-4377-b28a-f60d8178a82c)
![report](https://github.com/Allanrodriques/DLP-Final-Year/assets/68966594/3560a63f-1988-4c54-b887-345976658035)
