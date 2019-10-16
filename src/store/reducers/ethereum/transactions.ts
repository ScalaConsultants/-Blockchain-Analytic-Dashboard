import { ETHEREUM_SET_TRANSACTIONS, ETHEREUM_FLUSH_TRANSACTIONS } from '../../actions/ethereum/transactions';
import { Transaction } from '../../../types';
import { SetTransactionsAction } from '../../actions/types';

const initState: Transaction[] = [];

export default (state = initState, action: SetTransactionsAction): Transaction[] => {
  switch (action.type) {
    case ETHEREUM_SET_TRANSACTIONS:
      return [...state, ...action.transactions];
    case ETHEREUM_FLUSH_TRANSACTIONS:
      return initState;
    default:
      return state;
  }
};
