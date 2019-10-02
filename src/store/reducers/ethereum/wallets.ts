import { ETHEREUM_SET_WALLETS } from '../../actions/ethereum/wallets';

const initState: any = [];

export default (state = initState, action: any): any => {

  switch (action.type) {
    case ETHEREUM_SET_WALLETS:
      return [...action.wallets];
    default:
      return state;
  }
};
