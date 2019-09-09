import { combineReducers } from "redux";
import blocks from "./transactions";
import page from "./page";
import summed from "./summed";

export default combineReducers({
  blocks,
  summedBlocks: summed,
  page
});
