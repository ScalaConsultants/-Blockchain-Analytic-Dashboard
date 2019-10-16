import { put, takeEvery } from 'redux-saga/effects';

import { FetchTransactionsSummedAction } from '../../actions/types';
import { TransactionsSummed } from '../../../types';
import * as tezosActions from '../../actions/tezos/transactions-summed';

async function tezosFetchTransactionsSummed(walletHash:string): Promise<TransactionsSummed> {
  const res = await fetch(
    `${process.env.REACT_APP_HOST}/api/v1/tezos/wallets/linechart?limit=100&walletHash=${walletHash}`
  );
  return res.json();
}

function* tezosDoFetchTransactionsSummed(action:FetchTransactionsSummedAction) {
  const {transactionsSummedData} = action;
  const {
    TEZOS_FETCH_TRANSACTIONS_SUMMED_FAILED,
    TEZOS_FETCH_TRANSACTIONS_SUMMED_STARTED,
    TEZOS_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED,
    TEZOS_SET_TRANSACTIONS_SUMMED
  } = tezosActions;

  yield put({ type: TEZOS_FETCH_TRANSACTIONS_SUMMED_STARTED });

  const transactionsSummed = yield tezosFetchTransactionsSummed(transactionsSummedData.walletHash);

  try {
    if (transactionsSummed.length > 0) {
      yield put({
        type: TEZOS_SET_TRANSACTIONS_SUMMED,
        transactionsSummed
      });
    }
    yield put({ type: TEZOS_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED });

  } catch (e) {
    // TODO temporary solution - I will fix it in next step
    yield put({type: TEZOS_FETCH_TRANSACTIONS_SUMMED_FAILED, message: e.message});
  }
}

export function* tezosWatchDoFetchTransactionsSummed() {
  yield takeEvery(
    tezosActions.TEZOS_FETCH_TRANSACTIONS_SUMMED,
    tezosDoFetchTransactionsSummed
  );
}
