import { combineReducers } from "redux";
import ethereum from "./ethereum";
import tezos from "./tezos";

export default combineReducers({
  ethereum,
  tezos
});
