import { put, takeEvery } from 'redux-saga/effects';

import * as ethereumActions from '../../actions/ethereum/wallets';
import * as loaderActions from '../../actions/loader';
import { Wallets } from '../../../types';

async function fetchWallets(): Promise<Wallets> {
  const res = await fetch(`${process.env.REACT_APP_HOST}/api/v1/ethereum/wallets?groupBy=buyer&limit=50`);
  return res.json();
}

function* doFetchWallets() {
  const {
    ETHEREUM_FETCH_WALLETS_FAILED,
    ETHEREUM_FETCH_WALLETS_STARTED,
    ETHEREUM_FETCH_WALLETS_SUCCEEDED,
    ETHEREUM_SET_WALLETS
  } = ethereumActions;

  yield put({ type: ETHEREUM_FETCH_WALLETS_STARTED });

  const wallets = yield fetchWallets();

  try {
    if (wallets.length > 0) {
      yield put({
        type: ETHEREUM_SET_WALLETS,
        wallets
      });
    }
    yield put({ type: ETHEREUM_FETCH_WALLETS_SUCCEEDED });
  } catch (e) {
    // TODO temporary solution - I will fix it in next step
    yield put({type: ETHEREUM_FETCH_WALLETS_FAILED, message: e.message});
  }
}

export function* watchDoFetchWallets() {
  yield takeEvery(ethereumActions.ETHEREUM_FETCH_WALLETS, doFetchWallets);
}
