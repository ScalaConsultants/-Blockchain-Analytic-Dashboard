import { combineReducers } from "redux";
import wallets from "./wallets";
import transactions from "./transactions";


export default combineReducers({
  wallets,
  transactions
});
