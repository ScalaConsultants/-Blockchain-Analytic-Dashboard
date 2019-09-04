import { ETHEREUM_SET_TRANSACTIONS } from "../../actions/ethereum/transactions";
import { Block } from "../../../types";

const initState: Block[] = [];

export default (state = initState, action: any): Block[] => {
  switch (action.type) {
    case ETHEREUM_SET_TRANSACTIONS:
      return [...state, ...action.transactions];
    default:
      return state;
  }
};
