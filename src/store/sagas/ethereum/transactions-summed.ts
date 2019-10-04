import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsAction } from '../../actions/ethereum/types';
import { TransactionsSummed } from '../../../types';

import * as ethereumActions from '../../actions/ethereum/transactions-summed';
import * as loaderActions from '../../actions/loader';

async function fetchTransactionsSummed(data:string): Promise<TransactionsSummed> {
  const res = await fetch(
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/wallets/linechart?limit=100&walletHash=${data}`
  );
  return res.json();
}

function* doFetchTransactionsSummed(action:FetchTransactionsAction) {

  // Show loader on initial fetch
  yield put(loaderActions.showLoader());


  const transactions = yield fetchTransactionsSummed(action.data);

  if (transactions.length > 0) {
    yield put({
      type: ethereumActions.ETHEREUM_SET_TRANSACTIONS_SUMMED,
      transactions
    });
  }

  // Hide on consecutive requests
  yield put(loaderActions.hideLoader());

}

export function* watchDoFetchTransactionsSummed() {
  yield takeEvery(
    ethereumActions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED,
    doFetchTransactionsSummed
  );
}
