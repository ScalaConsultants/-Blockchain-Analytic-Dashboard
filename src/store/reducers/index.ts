import { combineReducers } from "redux";
import tezos from "./tezos";
import ethereum from "./ethereum";
import loader from "./loader";

export default combineReducers({
  tezos,
  ethereum,
  loader
});
