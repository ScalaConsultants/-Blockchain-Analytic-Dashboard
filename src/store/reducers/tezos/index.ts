import { combineReducers } from 'redux';
import wallets from './wallets';
import transactions from './transactions';
import transactionsSummed from './transactions-summed';
import status from './status';
import currency from './currency';


export default combineReducers({
  wallets,
  status,
  transactions,
  transactionsSummed,
  currency
});
