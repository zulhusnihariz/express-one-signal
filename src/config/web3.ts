import Web3 from 'web3';

let web3: Web3;

async function init() {
  web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL as string));
}

export { init, web3 };
