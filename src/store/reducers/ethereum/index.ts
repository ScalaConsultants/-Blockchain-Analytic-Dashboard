import { combineReducers } from "redux";
import wallets from "./wallets";
import transactions from "./transactions";
import transactionsSummed from "./transactions-summed";


export default combineReducers({
  wallets,
  transactions,
  transactionsSummed
});
