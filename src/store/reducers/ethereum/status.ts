import {
  ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED,
  ETHEREUM_FETCH_TRANSACTIONS_FAILED,
  ETHEREUM_FETCH_TRANSACTIONS_STARTED
} from '../../actions/ethereum/transactions';
import {
  ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED,
  ETHEREUM_FETCH_TRANSACTIONS_SUMMED_STARTED,
  ETHEREUM_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED
} from '../../actions/ethereum/transactions-summed';
import {
  ETHEREUM_FETCH_WALLETS_FAILED,
  ETHEREUM_FETCH_WALLETS_STARTED,
  ETHEREUM_FETCH_WALLETS_SUCCEEDED
} from '../../actions/ethereum/wallets';
import { SetTransactionsAction } from '../../actions/ethereum/types';
import { StatusRedux } from '../../../types';

const initState: StatusRedux = {
  transactionsIsFetching: false,
  transactionsSummedIsFetching: false,
  walletsIsFetching: false
};

export default (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS_STARTED:
      return {...state, transactionsIsFetching: true};
    case ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED:
    case ETHEREUM_FETCH_TRANSACTIONS_FAILED:
      return {...state, transactionsIsFetching: false};

    case ETHEREUM_FETCH_TRANSACTIONS_SUMMED_STARTED:
      return {...state, transactionsSummedIsFetching: true};
    case ETHEREUM_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED:
    case ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED:
      return {...state, transactionsSummedIsFetching: false};

    case ETHEREUM_FETCH_WALLETS_STARTED:
      return {...state, walletsIsFetching: true};
    case ETHEREUM_FETCH_WALLETS_SUCCEEDED:
    case ETHEREUM_FETCH_WALLETS_FAILED:
      return {...state, walletsIsFetching: false};
    default:
      return state;
  }
};
