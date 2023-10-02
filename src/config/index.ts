// import { init as initWeb3 } from './web3';
// import { init as initIPFS } from './ipfs';
import { init as initOneSignal } from './onesignal';

const initDependencies = async () => {
  // await initWeb3();
  // await initIPFS();
  await initOneSignal();
};

export { initDependencies };
