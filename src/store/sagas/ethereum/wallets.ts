import { put, takeEvery } from 'redux-saga/effects';

import { doGet } from '../../helpers/fetch';
import * as ethereumActions from '../../actions/ethereum/wallets';
import { Wallets } from '../../../types';

async function fetchWallets( {limit = 10, groupBy = 'buyer', from = 1567296000, to = 1567382400} ): Promise<Wallets> {
  let url = `api/v1/ethereum/wallets?groupBy=${groupBy}&limit=${limit}&from=${from}&to=${to}`;

  if (groupBy === 'data') {
    url = `api/v1/ethereum/data-wallets?limit=${limit}&from=${from}&to=${to}`;
  };

  const response = await doGet(url)

  return response.json();
}

function* doFetchWallets(action: any) {
  const { payload } = action;
  const {
    ETHEREUM_FETCH_WALLETS_FAILED,
    ETHEREUM_FETCH_WALLETS_STARTED,
    ETHEREUM_FETCH_WALLETS_SUCCEEDED,
    ETHEREUM_SET_WALLETS
  } = ethereumActions;

  yield put({ type: ETHEREUM_FETCH_WALLETS_STARTED });

  const wallets = yield fetchWallets(payload);

  try {
    if (wallets.length >= 0) {
      yield put({
        type: ETHEREUM_SET_WALLETS,
        wallets
      });
    }
    yield put({ type: ETHEREUM_FETCH_WALLETS_SUCCEEDED });
  } catch (error) {
    yield put({type: ETHEREUM_FETCH_WALLETS_FAILED, code: error.code});
  }
}

export function* watchDoFetchWallets() {
  yield takeEvery(ethereumActions.ETHEREUM_FETCH_WALLETS, doFetchWallets);
}
