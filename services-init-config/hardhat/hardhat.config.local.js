require("@nomiclabs/hardhat-ethers");
const fs = require("fs");
// const { bytecode } = require("./Create2Deployer.json");

// task(
//   "deploy",
//   "Deploys contract and writes address to ./.contract",
//   async (taskArgs, hre) => {
//     // We get the contract to deploy
//     const abi = []; // stubbed out since it is unecessary here
//     const NA = await hre.ethers.getContractFactory(abi, bytecode);
//     const na = await NA.deploy();

//     // Await deployment
//     await na.deployed();

//     // Write file
//     fs.writeFileSync("./.contract", na.address);
//   },
// );

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        version: '0.8.24',
        settings: {
            evmVersion: "london",
            optimizer: {
                enabled: true,
                runs: 1000,
            },
        },
    },
    defaultNetwork: 'hardhat',
    initialBaseFeePerGas: 0,
    loggingEnabled: false,
    networks: {
        hardhat: {
            hardfork: "london",
            initialBaseFeePerGas: 0,
            chainId: 381660001,
            allowUnlimitedContractSize: true,
            loggingEnabled: false,
            gasPrice: 0,
            gas: 0,
            gasMultiplier: 0,
            accounts: [{ privateKey: `0xb584831ccaa00a44d3f76bd49743e2bc0caf5795376c6556bbd77bb1c6ebd4bf`, balance: "90000000000000000000000" }]
        }
    }
}