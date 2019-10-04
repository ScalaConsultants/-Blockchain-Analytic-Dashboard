import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsAction } from './../../actions/ethereum/types';
import { Transactions } from '../../../types';

import * as ethereumActions from '../../actions/ethereum/transactions';
import * as loaderActions from '../../actions/loader';

async function fetchTransactions(walletHash:string, page:number, resultsPerPage:number = 20): Promise<Transactions> {
  const res = await fetch(
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/transactions?resultsPerPage=${resultsPerPage}&page=${page}&walletHash=${walletHash}`
  );
  return res.json();
}

function* doFetchTransactions(action: FetchTransactionsAction) {

  const { transactionsData } = action;

  // Show loader on initial fetch
  yield put(loaderActions.showLoader());

  const transactions = yield fetchTransactions(transactionsData.walletHash, transactionsData.page);

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
