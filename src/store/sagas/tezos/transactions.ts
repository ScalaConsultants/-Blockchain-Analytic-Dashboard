import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsAction } from '../../actions/types';
import { Transactions } from '../../../types';
import * as blockchainActions from '../../actions/tezos/transactions';

async function fetchTransactions(walletHash: string, page: number, resultsPerPage: number = 20): Promise<Transactions> {
  const res = await fetch(
    /* eslint-disable-next-line max-len */
    `${process.env.REACT_APP_HOST}/api/v1/tezos/transactions?groupBy=buyer&resultsPerPage=${resultsPerPage}&page=${page}&walletHash=${walletHash}`
  );
  return res.json();
}

function* doFetchTransactions(action: FetchTransactionsAction) {
  const { transactionsData } = action;
  const {
   TEZOS_FETCH_TRANSACTIONS_FAILED ,
   TEZOS_FETCH_TRANSACTIONS_STARTED,
   TEZOS_FETCH_TRANSACTIONS_SUCCEEDED,
   TEZOS_SET_TRANSACTIONS
  } = blockchainActions;

  yield put({ type: TEZOS_FETCH_TRANSACTIONS_STARTED });


  const transactions = yield fetchTransactions(transactionsData.walletHash, transactionsData.page);

    try {
      if (transactions.length > 0) {
        yield put({
          type: TEZOS_SET_TRANSACTIONS,
          transactions
        });
      }
      yield put({ type: TEZOS_FETCH_TRANSACTIONS_SUCCEEDED });
    } catch (e) {
      // TODO temporary solution - I will fix it in next step
      yield put({type: TEZOS_FETCH_TRANSACTIONS_FAILED, message: e.code});
    }
}

export function* watchDoFetchTransactions() {
  yield takeEvery(blockchainActions.TEZOS_FETCH_TRANSACTIONS, doFetchTransactions);
}
