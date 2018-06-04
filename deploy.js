const HDWalletProvider = require('truffle-hdwallet-provider'); // part of ganache that will provide the accounts to use.
const Web3 = require('web3');
const { interface, bytecode } = require('./compile'); 

const provider = new HDWalletProvider(
  'game saddle oyster laundry equal loop lunch allow cactus endless hover unfair', // my 12 words mnemonic
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'  // infura endpoint for a node that will deploy contract.
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
