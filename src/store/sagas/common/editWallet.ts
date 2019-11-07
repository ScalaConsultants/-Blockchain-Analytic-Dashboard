import { put } from 'redux-saga/effects';
import * as actions from '../../actions/common/editWallet';

async function editWallet(data: any) {
  const url = `api/v1/${data.blockchain_id}/wallets/edit`;

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };

  const response = await fetch(`${process.env.REACT_APP_HOST}/${url}`, options);

  return await response.json();
}

export function* doEditWallet (action: any) {
  try {
    const response = yield editWallet(action.data);
    const { msg, success } = response;
    const { blockchain_id } = action.data;

    if (success && blockchain_id === 'ethereum') return yield put(actions.ethEditWallet(msg, action.data));
    if (success && blockchain_id === 'tezos') return yield put(actions.xtzEditWallet(msg, action.data));
      
      yield put(actions.editWalletError('msg', msg));
  } catch (error) {
      yield put(actions.editWalletError('default', ''));
  }
}