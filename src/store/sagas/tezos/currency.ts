import { put, takeEvery } from 'redux-saga/effects';

import { doGet } from '../../helpers/fetch';
import * as blockchainActions from '../../actions/tezos/currency';

async function fetchCurrency(to = 1575542946846): Promise<any> {
  let url = `api/v1/currency?blockchain=tezos&timestamp=${1575542946846}`;

  const response = await doGet(url);

  return await response.json();
};

function* doFetchCurrency(action: any) {
  const { payload } = action;
  const {
    TEZOS_FETCH_CURRENCY_FAILED,
    TEZOS_FETCH_CURRENCY_STARTED,
    TEZOS_FETCH_CURRENCY_SUCCEEDED,
    TEZOS_SET_CURRENCY
  } = blockchainActions;

  yield put({ type: TEZOS_FETCH_CURRENCY_STARTED });

  try {
    const data = yield fetchCurrency(payload);
    const currency = data.value;

    yield put({
      type: TEZOS_SET_CURRENCY,
      currency
    });
    yield put({ type: TEZOS_FETCH_CURRENCY_SUCCEEDED });
  } catch (error) {
    yield put({ type: TEZOS_FETCH_CURRENCY_FAILED, message: error.code });
  }
}

export function* watchDoFetchCurrency() {
  yield takeEvery(blockchainActions.TEZOS_FETCH_CURRENCY, doFetchCurrency);
}
