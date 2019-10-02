import { put, takeEvery } from 'redux-saga/effects';

import * as ethereumActions from '../../actions/ethereum/wallets';
import * as loaderActions from '../../actions/loader';

async function fetchWallets(): Promise<any> {
  const res = await fetch(
    `http://localhost:5000/api/v1/ethereum/wallets?groupBy=from&limit=50`
  );
  return res.json();
}

function* doFetchWallets(): any {

  // Show loader on initial fetch
    yield put(loaderActions.showLoader());
  

  const wallets = yield fetchWallets();

  if (wallets.length > 0) {
    yield put({
      type: ethereumActions.ETHEREUM_SET_WALLETS,
      wallets
    });
  }

  // Hide on consecutive requests
    yield put(loaderActions.hideLoader());
  
}

export function* watchDoFetchWallets(): any {
  yield takeEvery(
    ethereumActions.ETHEREUM_FETCH_WALLETS,
    doFetchWallets
  );
}
