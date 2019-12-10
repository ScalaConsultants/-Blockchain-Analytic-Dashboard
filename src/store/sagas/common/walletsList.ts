import { put } from 'redux-saga/effects';

import * as actions from '../../actions/common/walletsList';
import { doGet, doPost } from '../../helpers/fetch';

async function getWalletList(type: any) {
  const url = `api/v1/wallets/`+type;

  const response = await doGet(url);

  return await response.json();
}

async function postWalletList(type: any, data: any) {
    const url = `api/v1/wallets/`+ type + `/edit`;
  
    await doPost(url, data);
}

export function* doWalletsList () {
    const response = yield getWalletList('public');

     yield put(actions.setWalletsList(response));

}

export function* doWalletsListUser () {
    const response = yield getWalletList('user');

     yield put(actions.setWalletsListUser(response));

}


export function* doWalletsListPost (action:any) {
    yield postWalletList('public', action.data);
    console.log(action.data)

}

export function* doWalletsListUserPost (action:any) {
    yield postWalletList('user', action.data);
    console.log(action.data)

}