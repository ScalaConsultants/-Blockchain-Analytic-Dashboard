import { TEZOS_SET_WALLETS } from '../../actions/tezos/wallets';

import { Wallet } from '../../../types';
import { SetWalletsActionReducer } from '../types';

const initState: Wallet[] = [];

export default (state = initState, action: SetWalletsActionReducer): Wallet[] => {
  switch (action.type) {
    case TEZOS_SET_WALLETS:
      return [...action.wallets];
    default:
      return state;
  }
};
