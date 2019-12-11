import { TEZOS_SET_TRANSACTIONS, TEZOS_FLUSH_TRANSACTIONS } from '../../actions/tezos/transactions';
import { Transaction } from '../../../types';
import { SetTransactionsAction } from '../../actions/types';

const initState: Transaction[] = [];

const transactions = (state = initState, action: SetTransactionsAction): Transaction[] => {
  switch (action.type) {
    case TEZOS_SET_TRANSACTIONS:
      return [...action.transactions];
    case TEZOS_FLUSH_TRANSACTIONS:
      return initState;
    default:
      return state;
  }
};

// const errors = (state = initState, action: any): any => {
//   switch (action.type) {
//     case TEZOS_SET_TRANSACTIONS:
//       return action.transactions;
//     default:
//       return state;
//   }
// };

export default transactions;
