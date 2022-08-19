// https://eth-goerli.g.alchemy.com/v2/Pr74JmfMtZZHJdM89cQtDDtT0bb0dq9L

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Pr74JmfMtZZHJdM89cQtDDtT0bb0dq9L",
      accounts: [
        "d8cdbf9146511c76c13bca98195dd253523fa4a6adadb465999ba55c8ba06089",
      ],
    },
  },
};
