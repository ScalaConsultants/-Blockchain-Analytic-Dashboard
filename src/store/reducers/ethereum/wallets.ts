import { ETHEREUM_SET_WALLETS } from '../../actions/ethereum/wallets';
import { ETH_EDIT_WALLET } from '../../actions/common/editWallet';

import { editWallet } from '../helpers';

import { Wallet } from '../../../types';
import { SetWalletsActionReducer } from '../types';

const initState: Wallet[] = [];

const ethEditWallet = (state: any, action: any) => editWallet(state, action);

export default (state = initState, action: SetWalletsActionReducer): Wallet[] => {
  switch (action.type) {
    case ETHEREUM_SET_WALLETS:
      return [...action.wallets];
    case ETH_EDIT_WALLET:
      return ethEditWallet(state, action);
    default:
      return state;
  }
};
