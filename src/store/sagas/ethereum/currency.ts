import { put, takeEvery } from 'redux-saga/effects';

import { doGet } from '../../helpers/fetch';
import * as blockchainActions from '../../actions/ethereum/currency';

async function fetchCurrency( {to = 1567382400} ): Promise<any> {
  let url = `api/v1/currency?blockchain=tezos&timestamp=${to}`;

  const response = await doGet(url);

  return response.json();
}

function* foFetchCurrency(action: any) {
  const { payload } = action;
  const {
    ETHEREUM_FETCH_CURRENCY_FAILED,
    ETHEREUM_FETCH_CURRENCY_STARTED,
    ETHEREUM_FETCH_CURRENCY_SUCCEEDED,
    ETHEREUM_SET_CURRENCY
  } = blockchainActions;

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
  } catch (e) {
    // TODO temporary solution - I will fix it in next step
    yield put({type: ETHEREUM_FETCH_CURRENCY_FAILED, message: e.code});
  }
}

export function* fetchActualCurrency() {
  yield takeEvery(blockchainActions.ETHEREUM_FETCH_CURRENCY, foFetchCurrency);
}
