import { combineReducers } from 'redux';

import {
  FETCH_TRANSACTIONS_SUCCEEDED,
  FETCH_TRANSACTIONS_FAILED,
  FETCH_TRANSACTIONS_STARTED
} from '../../actions/blockchain/transactions';
import {
  FETCH_TRANSACTIONS_SUMMED_FAILED,
  FETCH_TRANSACTIONS_SUMMED_STARTED,
  FETCH_TRANSACTIONS_SUMMED_SUCCEEDED
} from '../../actions/blockchain/transactions-summed';
import {
  FETCH_WALLETS_FAILED,
  FETCH_WALLETS_STARTED,
  FETCH_WALLETS_SUCCEEDED
} from '../../actions/blockchain/wallets';
import { SetTransactionsAction } from '../../actions/blockchain/types';

const initState: boolean = false;

const transactionsIsFetching = (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_STARTED:
      return true;
    case FETCH_TRANSACTIONS_SUCCEEDED:
    case FETCH_TRANSACTIONS_FAILED:
      return false;
    default:
      return state;
  }
};

const transactionsSummedIsFetching = (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_SUMMED_STARTED:
      return true;
    case FETCH_TRANSACTIONS_SUMMED_SUCCEEDED:
    case FETCH_TRANSACTIONS_SUMMED_FAILED:
      return false;
    default:
      return state;
  }
};

const walletsIsFetching = (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case FETCH_WALLETS_STARTED:
      return true;
    case FETCH_WALLETS_SUCCEEDED:
    case FETCH_WALLETS_FAILED:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  transactionsIsFetching,
  transactionsSummedIsFetching,
  walletsIsFetching
});
