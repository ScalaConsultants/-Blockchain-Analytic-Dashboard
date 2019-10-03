import { ETHEREUM_SET_WALLETS } from '../../actions/ethereum/wallets';

import { Wallet } from '../../../types';
import { SetWalletsActionReducer } from './types';

const initState: Wallet[] = [];

export default (state = initState, action: SetWalletsActionReducer): Wallet[] => {
  switch (action.type) {
    case ETHEREUM_SET_WALLETS:
      return [...action.wallets];
    default:
      return state;
  }
};
