import { combineReducers } from 'redux';

import {
  TEZOS_FETCH_TRANSACTIONS_SUCCEEDED,
  TEZOS_FETCH_TRANSACTIONS_FAILED,
  TEZOS_FETCH_TRANSACTIONS_STARTED
} from '../../actions/tezos/transactions';
import {
  TEZOS_FETCH_TRANSACTIONS_SUMMED_FAILED,
  TEZOS_FETCH_TRANSACTIONS_SUMMED_STARTED,
  TEZOS_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED
} from '../../actions/tezos/transactions-summed';
import {
  TEZOS_FETCH_WALLETS_FAILED,
  TEZOS_FETCH_WALLETS_STARTED,
  TEZOS_FETCH_WALLETS_SUCCEEDED
} from '../../actions/tezos/wallets';
import { SetTransactionsAction } from '../../actions/types';

const initState: boolean = false;

const tezosTransactionsIsFetching = (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case TEZOS_FETCH_TRANSACTIONS_STARTED:
      return true;
    case TEZOS_FETCH_TRANSACTIONS_SUCCEEDED:
    case TEZOS_FETCH_TRANSACTIONS_FAILED:
      return false;
    default:
      return state;
  }
};

const tezosTransactionsSummedIsFetching = (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case TEZOS_FETCH_TRANSACTIONS_SUMMED_STARTED:
      return true;
    case TEZOS_FETCH_TRANSACTIONS_SUMMED_SUCCEEDED:
    case TEZOS_FETCH_TRANSACTIONS_SUMMED_FAILED:
      return false;
    default:
      return state;
  }
};

const tezosWalletsIsFetching = (state = initState, action: SetTransactionsAction) => {
  switch (action.type) {
    case TEZOS_FETCH_WALLETS_STARTED:
      return true;
    case TEZOS_FETCH_WALLETS_SUCCEEDED:
    case TEZOS_FETCH_WALLETS_FAILED:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  tezosTransactionsIsFetching,
  tezosTransactionsSummedIsFetching,
  tezosWalletsIsFetching
});
