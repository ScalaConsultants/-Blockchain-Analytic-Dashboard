import { ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED, ETHEREUM_FETCH_TRANSACTIONS_FAILED , ETHEREUM_FETCH_TRANSACTIONS } from '../../actions/ethereum/transactions';
import { SetTransactionsAction } from '../../actions/ethereum/types';

const initState: Object = {};

export default (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS:
      return {...state, transactionsIsFetching: true};
    case ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED:
    case ETHEREUM_FETCH_TRANSACTIONS_FAILED:
      return {...state, transactionsIsFetching: false};
    default:
      return state;
  }
};
