import { TEZOS_SET_TRANSACTIONS } from '../../actions/tezos/transactions';

const initState: any = [];

const transactions = (state = initState, action: any): any => {
  switch (action.type) {
    case TEZOS_SET_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
};

const errors = (state = initState, action: any): any => {
  switch (action.type) {
    case TEZOS_SET_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
};

export default transactions;
