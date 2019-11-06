import { TEZOS_SET_WALLETS } from '../../actions/tezos/wallets';
import { XTZ_EDIT_WALLET } from '../../actions/common/editWallet';

import { editWallet } from '../helpers';

import { Wallet } from '../../../types';
import { SetWalletsActionReducer } from '../types';

const initState: Wallet[] = [];

const xtzEditWallet = (state: any, action: any) => editWallet(state, action);

export default (state = initState, action: SetWalletsActionReducer): Wallet[] => {
  switch (action.type) {
    case TEZOS_SET_WALLETS:
      return [...action.wallets];
    case XTZ_EDIT_WALLET: return xtzEditWallet(state, action);
    default:
      return state;
  }
};
