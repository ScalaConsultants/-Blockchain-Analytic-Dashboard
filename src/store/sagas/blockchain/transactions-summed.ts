import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsSummedAction } from '../../actions/blockchain/types';
import { TransactionsSummed } from '../../../types';
import * as blockchainActions from '../../actions/blockchain/transactions-summed';

async function fetchTransactionsSummed(walletHash:string): Promise<TransactionsSummed> {
  const res = await fetch(
    `${process.env.REACT_APP_HOST}/api/v1/ethereum/wallets/linechart?limit=100&walletHash=${walletHash}`
  );
  return res.json();
}

function* doFetchTransactionsSummed(action:FetchTransactionsSummedAction) {
  const {transactionsSummedData} = action;
  const {
    FETCH_TRANSACTIONS_SUMMED_FAILED,
    FETCH_TRANSACTIONS_SUMMED_STARTED,
    FETCH_TRANSACTIONS_SUMMED_SUCCEEDED,
    SET_TRANSACTIONS_SUMMED
  } = blockchainActions;

  yield put({ type: FETCH_TRANSACTIONS_SUMMED_STARTED });

  const transactionsSummed = yield fetchTransactionsSummed(transactionsSummedData.walletHash);

  try {
    if (transactionsSummed.length > 0) {
      yield put({
        type: SET_TRANSACTIONS_SUMMED,
        transactionsSummed
      });
    }
    yield put({ type: FETCH_TRANSACTIONS_SUMMED_SUCCEEDED });

  } catch (e) {
    // TODO temporary solution - I will fix it in next step
    yield put({type: FETCH_TRANSACTIONS_SUMMED_FAILED, message: e.message});
  }
}

export function* watchDoFetchTransactionsSummed() {
  yield takeEvery(
    blockchainActions.FETCH_TRANSACTIONS_SUMMED,
    doFetchTransactionsSummed
  );
}
