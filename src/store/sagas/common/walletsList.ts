import { put } from 'redux-saga/effects';

import * as actions from '../../actions/common/walletsList';
import { doGet } from '../../helpers/fetch';

async function getWalletList(type: any) {
  const url = `/api/v1/wallets/`+type;

  const response = await doGet(url);

  return await response.json();
}

export function* doWalletsList () {
    const response = yield getWalletList('public');

     yield put(actions.setWalletsList(response));

}