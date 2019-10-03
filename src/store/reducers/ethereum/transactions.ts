import { ETHEREUM_SET_TRANSACTIONS } from '../../actions/ethereum/transactions';
import { Transaction } from '../../../types';
import { SetTransactionsAction } from '../../actions/ethereum/types';

const initState: Transaction[] = [];

export default (state = initState, action: SetTransactionsAction): Transaction[] => {
  switch (action.type) {
    case ETHEREUM_SET_TRANSACTIONS:
      return [...action.transactions];
    default:
      return state;
  }
};
