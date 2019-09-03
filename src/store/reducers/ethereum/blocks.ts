// import {
//   BLOKCHAIN_SET_TRANSACTIONS,
//   BLOKCHAIN_FLUSH_TRANSACTIONS,
//   BLOKCHAIN_SET_MORE_TRANSACTIONS
// } from "../../actions/blokchain";
import { Block } from "../../../types";

const initState: Block[] = [];

export default (state = initState, action: any): Block[] => {
  switch (action.type) {
    default:
      return state;
  }
};
