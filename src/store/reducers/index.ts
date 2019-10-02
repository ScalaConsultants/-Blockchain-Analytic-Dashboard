import { combineReducers } from "redux";
import ethereum from "./ethereum";
import tezos from "./tezos";
import loader from "./loader";

export default combineReducers({
  tezos,
  ethereum,
  loader,
});
