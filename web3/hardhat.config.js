/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();

module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://11155111.rpc.thirdweb.com",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
