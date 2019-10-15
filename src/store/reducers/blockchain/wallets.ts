import { SET_WALLETS } from '../../actions/blockchain/wallets';

import { Wallet } from '../../../types';
import { SetWalletsActionReducer } from './types';

const initState: Wallet[] = [];

export default (state = initState, action: SetWalletsActionReducer): Wallet[] => {
  switch (action.type) {
    case SET_WALLETS:
      return [...action.wallets];
    default:
      return state;
  }
};
