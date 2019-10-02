import { combineReducers } from "redux";
import ethereum from "./ethereum";
import loader from "./loader";

export default combineReducers({
  ethereum,
  loader,
});
