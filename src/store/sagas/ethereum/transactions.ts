import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsAction } from './../../actions/ethereum/types';
import { Transactions } from '../../../types';

import * as ethereumActions from '../../actions/ethereum/transactions';
import * as loaderActions from '../../actions/loader';

async function fetchTransactions(data:string): Promise<Transactions> {
  const res = await fetch(
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/wallets/linechart?limit=100&walletHash=${data}`
  );
  return res.json();
}

function* doFetchTransactions(action:FetchTransactionsAction) {

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

export function* watchDoFetchTransactions() {
  yield takeEvery(
    ethereumActions.ETHEREUM_FETCH_TRANSACTIONS,
    doFetchTransactions
  );
}
