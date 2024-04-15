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
  defaultNetwork: "holesky",
  networks: {
    hardhat: {
      chainId: 17000,
    },
    holesky: {
      url: "https://rpc.holesky.ethpandaops.io",
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
