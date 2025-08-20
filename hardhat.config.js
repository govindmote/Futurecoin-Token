require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { PRIVATE_KEY, MUMBAI_RPC_URL, BSCT_RPC_URL, ETHERSCAN_KEY, POLYGONSCAN_KEY, BSCSCAN_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: { enabled: true, runs: 200 }
    }
  },
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    },
    bscTestnet: {
      url: BSCT_RPC_URL || "",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  },
  etherscan: {
    // Hardhat will pick the right API key by network name
    apiKey: {
      polygonMumbai: process.env.POLYGONSCAN_KEY || POLYGONSCAN_KEY || "",
      bscTestnet: process.env.BSCSCAN_KEY || BSCSCAN_KEY || ""
    },
    customChains: [
      {
        network: "polygonMumbai",
        chainId: 80001,
        urls: {
          apiURL: "https://api-testnet.polygonscan.com/api",
          browserURL: "https://mumbai.polygonscan.com"
        }
      },
      {
        network: "bscTestnet",
        chainId: 97,
        urls: {
          apiURL: "https://api-testnet.bscscan.com/api",
          browserURL: "https://testnet.bscscan.com"
        }
      }
    ]
  }
};
