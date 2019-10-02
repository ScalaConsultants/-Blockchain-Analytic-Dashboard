import { ETHEREUM_SET_TRANSACTIONS } from '../../actions/ethereum/transactions';

const initState:any = [];

export default (state = initState, action: any):any => {
  switch (action.type) {
    case ETHEREUM_SET_TRANSACTIONS:
      return [...state, ...action.transactions];
    default:
      return state;
  }
};
