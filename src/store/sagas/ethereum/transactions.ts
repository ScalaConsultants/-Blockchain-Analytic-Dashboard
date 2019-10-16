import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsAction } from '../../actions/types';
import { Transactions } from '../../../types';
import * as ethereumActions from '../../actions/ethereum/transactions';

async function ethereumFetchTransactions(walletHash: string, page: number, resultsPerPage: number = 20): Promise<Transactions> {
  const res = await fetch(
    /* eslint-disable-next-line max-len */
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/transactions?groupBy=buyer&resultsPerPage=${resultsPerPage}&page=${page}&walletHash=${walletHash}`
  );
  return res.json();
}

function* ethereumDoFetchTransactions(action: FetchTransactionsAction) {
  const { transactionsData } = action;
  const {
   ETHEREUM_FETCH_TRANSACTIONS_FAILED ,
   ETHEREUM_FETCH_TRANSACTIONS_STARTED,
   ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED,
   ETHEREUM_SET_TRANSACTIONS
  } = ethereumActions;

  yield put({ type: ETHEREUM_FETCH_TRANSACTIONS_STARTED });


  const transactions = yield ethereumFetchTransactions(transactionsData.walletHash, transactionsData.page);

    try {
      if (transactions.length > 0) {
        yield put({
          type: ETHEREUM_SET_TRANSACTIONS,
          transactions
        });
      }
      yield put({ type: ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED });
    } catch (e) {
      // TODO temporary solution - I will fix it in next step
      yield put({type: ETHEREUM_FETCH_TRANSACTIONS_FAILED, message: e.message});
    }
}

export function* ethereumWatchDoFetchTransactions() {
  yield takeEvery(ethereumActions.ETHEREUM_FETCH_TRANSACTIONS, ethereumDoFetchTransactions);
}
