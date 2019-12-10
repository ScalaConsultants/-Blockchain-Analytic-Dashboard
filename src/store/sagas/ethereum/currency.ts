import { put, takeEvery } from 'redux-saga/effects';

import { doGet } from '../../helpers/fetch';
import * as ethereumActions from '../../actions/ethereum/currency';

async function fetchCurrency( {to = 1575971788507} ): Promise<any> {
  let url = `api/v1/currency?blockchain=ethereum&timestamp=${1575971788507}`;

  const response = await doGet(url);
  console.log('response ethereum', response);

  return response.json();
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

  const currency = yield fetchCurrency(payload);

  try {
    if (currency.length >= 0) {
      yield put({
        type: ETHEREUM_SET_CURRENCY,
        currency
      });
    }
    yield put({ type: ETHEREUM_FETCH_CURRENCY_SUCCEEDED });
  } catch (error) {
    yield put({type: ETHEREUM_FETCH_CURRENCY_FAILED, message: error.code});
  }
}

export function* watchDoFetchCurrency() {
  yield takeEvery(ethereumActions.ETHEREUM_FETCH_CURRENCY, doFetchCurrency);
}
