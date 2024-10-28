require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.13",
    defaultNetwork: "lineaSepolia",
    networks: {
      hardhat: {},
      lineaSepolia: {
        url: "https://59141.rpc.thirdweb.com/d391b93f5f62d9c15f67142e43841acc",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
