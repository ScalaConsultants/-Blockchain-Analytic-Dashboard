import { takeEvery } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';

import * as editWalletActions from '../../actions/common/editWallet';
import * as walletsList from '../../actions/common/walletsList';

import { doEditWallet } from './editWallet';
import { doWalletsList, doWalletsListUser, doWalletsListUserPost, doWalletsListPost } from './walletsList';

export default function* watchCommon() {
    yield all([
    takeEvery(editWalletActions.EDIT_WALLET, doEditWallet),
    takeEvery(walletsList.GET_WALLETS_LIST, doWalletsList),
    takeEvery(walletsList.GET_WALLETS_LIST_USER, doWalletsListUser),
    takeEvery(walletsList.EDIT_WALLETS_LIST, doWalletsListPost),
    takeEvery(walletsList.EDIT_WALLETS_LIST_USER, doWalletsListUserPost),

    ]);
}