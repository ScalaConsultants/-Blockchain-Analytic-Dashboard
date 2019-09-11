import { Block, SummedBlock } from "../../../types";
import sumTransactions from "../blockchain/helpers";
import { ETHEREUM_SUM_TRANSACTIONS } from "../../actions/ethereum/transactions";

const initState: SummedBlock[] = [];

const summed = (state = initState, action: any): any => {
  switch (action.type) {
    case ETHEREUM_SUM_TRANSACTIONS:
      return sumTransactions(action.payload.blocks);
    default:
      return state;
  }
};

export default summed;
