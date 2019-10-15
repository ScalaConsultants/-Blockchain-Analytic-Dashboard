import { SET_TRANSACTIONS, FLUSH_TRANSACTIONS } from '../../actions/blockchain/transactions';
import { Transaction } from '../../../types';
import { SetTransactionsAction } from '../../actions/blockchain/types';

const initState: Transaction[] = [];

export default (state = initState, action: SetTransactionsAction): Transaction[] => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return [...state, ...action.transactions];
    case FLUSH_TRANSACTIONS:
      return initState;
    default:
      return state;
  }
};
