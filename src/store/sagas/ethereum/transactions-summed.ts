import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsSummedAction } from '../../actions/ethereum/types';
import { TransactionsSummed } from '../../../types';
import * as ethereumActions from '../../actions/ethereum/transactions-summed';

async function fetchTransactionsSummed(walletHash:string): Promise<TransactionsSummed> {
  const res = await fetch(
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/wallets/linechart?limit=100&walletHash=${walletHash}`
  );
  return res.json();
}

function* doFetchTransactionsSummed(action:FetchTransactionsSummedAction) {
  const {transactionsSummedData} = action;
  const {
    ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED,
    ETHEREUM_FETCH_TRANSACTIONS_SUMMED_STARTED,
    ETHEREUM_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED,
    ETHEREUM_SET_TRANSACTIONS_SUMMED
  } = ethereumActions;

  yield put({ type: ETHEREUM_FETCH_TRANSACTIONS_SUMMED_STARTED });

  const transactionsSummed = yield fetchTransactionsSummed(transactionsSummedData.walletHash);

  try {
    if (transactionsSummed.length > 0) {
      yield put({
        type: ETHEREUM_SET_TRANSACTIONS_SUMMED,
        transactionsSummed
      });
    }
    yield put({ type: ETHEREUM_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED });

  } catch (e) {
    yield put({type: ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED, message: e.message});
  }
}

export function* watchDoFetchTransactionsSummed() {
  yield takeEvery(
    ethereumActions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED,
    doFetchTransactionsSummed
  );
}
