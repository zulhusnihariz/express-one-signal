import * as OneSignal from 'onesignal-node';

let oneSignal: OneSignal.Client;

async function init() {
  oneSignal = new OneSignal.Client(`${process.env.ONE_SIGNAL_APP_ID}`, `${process.env.ONE_SIGNAL_API_KEY}`);
}

export { init, oneSignal };
