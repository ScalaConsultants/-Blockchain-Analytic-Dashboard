import { put, takeEvery, select } from 'redux-saga/effects';

import * as ethereumActions from '../../actions/ethereum/transactions';
import * as ethereumPageActions from '../../actions/ethereum/page';
import * as loaderActions from '../../actions/loader';

export const getPage = (state: any): number => state.ethereum.page;

async function fetchTransactions(page: number): Promise<any> {
  const res = await fetch(
    `http://localhost:5000/api/v1/ethereum/wallets?groupBy=from&limit=100`
  );
  return res.json();
}

function* doFetchTransactions(): any {
  const page = yield select(getPage);
  const showLoader = page === 1;

  // Show loader on initial fetch
  // yield put(loaderActions.showLoader());

  const wallets = yield fetchTransactions(page);

  if (wallets.length > 0) {
    yield put({
      type: ethereumActions.ETHEREUM_SET_WALLETS,
      wallets
    });
  }

  // Hide on consecutive requests
    yield put(loaderActions.hideLoader());

}

export function* watchDoFetchTransactions(): any {
  yield takeEvery(
    ethereumActions.ETHEREUM_FETCH_WALLETS,
    doFetchTransactions
  );
}
