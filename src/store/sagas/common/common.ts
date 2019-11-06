import { takeEvery } from 'redux-saga/effects';

import * as editWalletActions from '../../actions/common/editWallet';

import { doEditWallet } from './editWallet';

export default function* watchCommon() {
    yield takeEvery(editWalletActions.EDIT_WALLET, doEditWallet);
}