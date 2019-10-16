import { combineReducers } from 'redux';

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
import { SetTransactionsAction } from '../../actions/types';

const initState: boolean = false;

const ethereumTransactionsIsFetching = (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS_STARTED:
      return true;
    case ETHEREUM_FETCH_TRANSACTIONS_SUCCEEDED:
    case ETHEREUM_FETCH_TRANSACTIONS_FAILED:
      return false;
    default:
      return state;
  }
};

const ethereumTransactionsSummedIsFetching = (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case ETHEREUM_FETCH_TRANSACTIONS_SUMMED_STARTED:
      return true;
    case ETHEREUM_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED:
    case ETHEREUM_FETCH_TRANSACTIONS_SUMMED_FAILED:
      return false;
    default:
      return state;
  }
};

const ethereumWalletsIsFetching = (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case ETHEREUM_FETCH_WALLETS_STARTED:
      return true;
    case ETHEREUM_FETCH_WALLETS_SUCCEEDED:
    case ETHEREUM_FETCH_WALLETS_FAILED:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  ethereumTransactionsIsFetching,
  ethereumTransactionsSummedIsFetching,
  ethereumWalletsIsFetching
});
