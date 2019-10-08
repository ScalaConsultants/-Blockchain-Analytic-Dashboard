import { put, takeEvery } from 'redux-saga/effects';

import * as ethereumActions from '../../actions/ethereum/wallets';
import * as loaderActions from '../../actions/loader';
import { Wallets } from '../../../types';

async function fetchWallets(): Promise<Wallets> {
  const res = await fetch(
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/wallets?groupBy=from&limit=50`
  );
  return res.json();
}

function* doFetchWallets() {
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

export function* watchDoFetchWallets() {
  yield takeEvery(
    ethereumActions.ETHEREUM_FETCH_WALLETS,
    doFetchWallets
  );
}
