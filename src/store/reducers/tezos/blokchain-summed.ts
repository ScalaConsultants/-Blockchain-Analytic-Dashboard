import {
  BLOKCHAIN_SUM_TRANSACTIONS,
  BLOKCHAIN_SET_MORE_TRANSACTIONS
} from "../../actions/tezos/blokchain";
import { Block, SummedBlock } from "../../../types";
import { sumTransactions } from "../blockchain/helpers";

const initState: SummedBlock[] = [];

export const blokchainSummed = (state = initState, action: any): any => {
  switch (action.type) {
    case BLOKCHAIN_SUM_TRANSACTIONS:
      return sumTransactions(action.payload.blocks);
    case BLOKCHAIN_SET_MORE_TRANSACTIONS:
      const { transactions } = action;

      return transactions.reduce((acc: any, next: Block): any => {
        const foundBlockIndex = acc.findIndex(
          (b: SummedBlock): boolean => b.source === next.source
        );
        if (foundBlockIndex !== -1) {
          acc[foundBlockIndex].transactions++;
        } else {
          acc.push(next);
        }

        return acc;
      }, state);
    default:
      return state;
  }
};
