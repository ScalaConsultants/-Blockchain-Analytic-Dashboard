import { SET_TRANSACTIONS_SUMMED } from '../../actions/blockchain/transactions-summed';
import { TransactionSummed } from '../../../types';
import { SetTransactionsSummedAction } from '../../actions/blockchain/types';

const initState: TransactionSummed[] = [];

export default (state = initState, action: SetTransactionsSummedAction): TransactionSummed[] => {
  switch (action.type) {
    case SET_TRANSACTIONS_SUMMED:
      return [...action.transactionsSummed];
    default:
      return state;
  }
};
