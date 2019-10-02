import { put, takeEvery } from 'redux-saga/effects';

import * as ethereumActions from '../../actions/ethereum/transactions';
import * as loaderActions from '../../actions/loader';

async function fetchTransactions(data:any): Promise<any> {
  const res = await fetch(
    `http://localhost:5000/api/v1/ethereum/wallets/linechart?limit=100&walletHash=`+data
  );
  return res.json();
}

function* doFetchTransactions(action:any): any {

  // Show loader on initial fetch
  yield put(loaderActions.showLoader());


  const transactions = yield fetchTransactions(action.data);

  if (transactions.length > 0) {
    yield put({
      type: ethereumActions.ETHEREUM_SET_TRANSACTIONS,
      transactions
    });
  }

  // Hide on consecutive requests
  yield put(loaderActions.hideLoader());

}

export function* watchDoFetchTransactions(): any {
  yield takeEvery(
    ethereumActions.ETHEREUM_FETCH_TRANSACTIONS,
    doFetchTransactions
  );
}
