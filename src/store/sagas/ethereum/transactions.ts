import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsAction } from '../../actions/ethereum/types';
import { Transactions } from '../../../types';
import * as ethereumActions from '../../actions/ethereum/transactions';

async function fetchTransactions(walletHash: string, page: number, resultsPerPage: number = 20): Promise<Transactions> {
  const res = await fetch(
    /* eslint-disable-next-line max-len */
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/transactions?groupBy=buyer&resultsPerPage=${resultsPerPage}&page=${page}&walletHash=0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE`
  );
  return res.json();
}

function* doFetchTransactions(action: FetchTransactionsAction) {
  const { transactionsData } = action;
  const {
    ETHEREUM_FETCH_TRANSACTIONS_FAILED ,
    ETHEREUM_FETCH_TRANSACTIONS_STARTED,
    ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED,
    ETHEREUM_SET_TRANSACTIONS
  } = ethereumActions;

  yield put({ type: ETHEREUM_FETCH_TRANSACTIONS_STARTED });


  const transactions = yield fetchTransactions(transactionsData.walletHash, transactionsData.page);

    try {
      if (transactions.length > 0) {
        yield put({
          type: ETHEREUM_SET_TRANSACTIONS,
          transactions
        });
      }
      yield put({ type: ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED });
    } catch (error) {
      yield put({type: ETHEREUM_FETCH_TRANSACTIONS_FAILED, code: error.code});
    }
}

export function* watchDoFetchTransactions() {
  yield takeEvery(ethereumActions.ETHEREUM_FETCH_TRANSACTIONS, doFetchTransactions);
}
