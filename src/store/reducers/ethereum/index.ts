import { combineReducers } from "redux";
import blocks from "./transactions";
import page from "./page";

export default combineReducers({
  blocks,
  page
});
