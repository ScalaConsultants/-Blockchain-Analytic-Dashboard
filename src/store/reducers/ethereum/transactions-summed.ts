import { ETHEREUM_SET_TRANSACTIONS_SUMMED } from '../../actions/ethereum/transactions-summed';
import { TransactionSummed } from '../../../types';
import { SetTransactionsSummedAction } from '../../actions/types';

const initState: TransactionSummed[] = [];

export default (state = initState, action: SetTransactionsSummedAction): TransactionSummed[] => {
  switch (action.type) {
    case ETHEREUM_SET_TRANSACTIONS_SUMMED:
      return [...action.transactionsSummed];
    default:
      return state;
  }
};
