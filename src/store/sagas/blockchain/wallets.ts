import { put, takeEvery } from 'redux-saga/effects';
import * as blockchainActions from '../../actions/blockchain/wallets';
import { Wallets } from '../../../types';



async function fetchWallets( {type= 'ethereum', limit= 10, groupBy = 'buyer'} ): Promise<Wallets> {
  const res = await fetch(`${process.env.REACT_APP_HOST}/api/v1/${type}/wallets/cache?groupBy=${groupBy}&limit=${limit}`);

  console.log('res ', res);
  return res.json();
}

function* doFetchWallets(action: any) {
  const { payload } = action;
  const {
    FETCH_WALLETS_FAILED,
    FETCH_WALLETS_STARTED,
    FETCH_WALLETS_SUCCEEDED,
    SET_WALLETS
  } = blockchainActions;

  console.log('payload ', payload);
  yield put({ type: FETCH_WALLETS_STARTED });

  const wallets = yield fetchWallets(payload);

  try {
    if (wallets.length > 0) {
      yield put({
        type: SET_WALLETS,
        wallets
      });
    }
    yield put({ type: FETCH_WALLETS_SUCCEEDED });
  } catch (e) {
    // TODO temporary solution - I will fix it in next step
    yield put({type: FETCH_WALLETS_FAILED, message: e.message});
  }
}

export function* watchDoFetchWallets() {
  yield takeEvery(blockchainActions.FETCH_WALLETS, doFetchWallets);
}
