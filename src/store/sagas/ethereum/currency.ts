import { put, takeEvery } from 'redux-saga/effects';

import { doGet } from '../../helpers/fetch';
import * as ethereumActions from '../../actions/ethereum/currency';

async function fetchCurrency(to = 1575542946846): Promise<any> {
  let url = `api/v1/currency?blockchain=ethereum&timestamp=${1575542946846}`;

  const response = await doGet(url);

  return await response.json();
}

function* doFetchCurrency(action: any) {
  const { payload } = action;
  const {
    ETHEREUM_FETCH_CURRENCY_FAILED,
    ETHEREUM_FETCH_CURRENCY_STARTED,
    ETHEREUM_FETCH_CURRENCY_SUCCEEDED,
    ETHEREUM_SET_CURRENCY
  } = ethereumActions;

  yield put({ type: ETHEREUM_FETCH_CURRENCY_STARTED });

  try {
    const currency = yield fetchCurrency(payload);
    yield put({
      type: ETHEREUM_SET_CURRENCY,
      currency
    });
    yield put({ type: ETHEREUM_FETCH_CURRENCY_SUCCEEDED });
  } catch (error) {
    yield put({ type: ETHEREUM_FETCH_CURRENCY_FAILED, message: error.code });
  }
}

export function* watchDoFetchCurrency() {
  yield takeEvery(ethereumActions.ETHEREUM_FETCH_CURRENCY, doFetchCurrency);
}
