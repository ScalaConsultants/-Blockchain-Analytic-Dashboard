import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsAction } from '../../actions/blockchain/types';
import { Transactions } from '../../../types';
import * as blockchainActions from '../../actions/blockchain/transactions';

async function fetchTransactions(walletHash: string, page: number, resultsPerPage: number = 20): Promise<Transactions> {
  const res = await fetch(
    /* eslint-disable-next-line max-len */
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/transactions?groupBy=buyer&resultsPerPage=${resultsPerPage}&page=${page}&walletHash=${walletHash}`
  );
  return res.json();
}

function* doFetchTransactions(action: FetchTransactionsAction) {
  const { transactionsData } = action;
  const {
   FETCH_TRANSACTIONS_FAILED ,
   FETCH_TRANSACTIONS_STARTED,
   FETCH_TRANSACTIONS_SUCCEEDED,
   SET_TRANSACTIONS
  } = blockchainActions;

  yield put({ type: FETCH_TRANSACTIONS_STARTED });


  const transactions = yield fetchTransactions(transactionsData.walletHash, transactionsData.page);

    try {
      if (transactions.length > 0) {
        yield put({
          type: SET_TRANSACTIONS,
          transactions
        });
      }
      yield put({ type: FETCH_TRANSACTIONS_SUCCEEDED });
    } catch (e) {
      // TODO temporary solution - I will fix it in next step
      yield put({type: FETCH_TRANSACTIONS_FAILED, message: e.message});
    }
}

export function* watchDoFetchTransactions() {
  yield takeEvery(blockchainActions.FETCH_TRANSACTIONS, doFetchTransactions);
}
