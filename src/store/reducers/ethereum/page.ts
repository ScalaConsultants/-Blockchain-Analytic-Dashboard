import { ETHEREUM_FETCH_MORE_TRANSACTIONS } from "../../actions/ethereum/page";
import { Block } from "../../../types";

const initState = 1;

export default (state = initState, action: any): number => {
  switch (action.type) {
    case ETHEREUM_FETCH_MORE_TRANSACTIONS:
      return state + 1;
    default:
      return state;
  }
};
