import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsAction } from '../../actions/ethereum/types';
import { Transactions } from '../../../types';

import * as ethereumActions from '../../actions/ethereum/transactions';
import * as loaderActions from '../../actions/loader';

async function fetchTransactions(walletHash: string, page: number, resultsPerPage: number = 20): Promise<Transactions> {
  const res = await fetch(
    /* eslint-disable-next-line max-len */
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/transactions?groupBy=buyer&resultsPerPage=${resultsPerPage}&page=${page}&walletHash=${walletHash}`
  );
  return res.json();
}

function* doFetchTransactions(action: FetchTransactionsAction) {
  const { transactionsData } = action;
  const { ETHEREUM_SET_TRANSACTIONS, ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED, ETHEREUM_FETCH_TRANSACTIONS_FAILED } = ethereumActions;

  // Show loader on initial fetch
  yield put(loaderActions.showLoader());


  const transactions = yield fetchTransactions(transactionsData.walletHash, transactionsData.page);

  if (transactions.length > 0) {
    yield put({
      type: ETHEREUM_SET_TRANSACTIONS,
      transactions
    });
  }

    try {
      if (transactions.length > 0) {
        yield put({
          type: ETHEREUM_SET_TRANSACTIONS,
          transactions
        });
      }
      yield put({
        type: ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED
      });
    } catch (e) {
      yield put({type: ETHEREUM_FETCH_TRANSACTIONS_FAILED, message: e.message});
    }

  // Hide on consecutive requests
  yield put(loaderActions.hideLoader());
}

export function* watchDoFetchTransactions() {
  yield takeEvery(ethereumActions.ETHEREUM_FETCH_TRANSACTIONS, doFetchTransactions);
}
