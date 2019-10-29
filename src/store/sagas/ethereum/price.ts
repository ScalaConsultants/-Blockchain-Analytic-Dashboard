import { put, takeEvery } from 'redux-saga/effects';

async function fetchEthereumPrice () {
  const res = await fetch(
    /* eslint-disable-next-line max-len */
    `https://api.coinmarketcap.com/v1/ticker/ethereum/
    `
  );

  return res.json();
}
  
