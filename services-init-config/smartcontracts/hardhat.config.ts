import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.24',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: 'firefly',
  networks: {
    firefly: {
      chainId: 381660001,
      url: 'http://localhost:8545',
      accounts: [`0xb584831ccaa00a44d3f76bd49743e2bc0caf5795376c6556bbd77bb1c6ebd4bf`],
      loggingEnabled: true
    },
   
  },
};

export default config;
