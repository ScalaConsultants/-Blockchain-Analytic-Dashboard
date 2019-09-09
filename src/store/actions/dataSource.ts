import { DataSourceActionType, Block } from "../../types";
import * as TezosActions from "./tezos/blokchain";
import * as EthereumActions from "./ethereum/transactions";

export const SET_DATA_SOURCE = "SET_DATA_SOURCE";

// Blockchains
export const TEZOS = "tezos";
export const ETHEREUM = "ethereum";

export const SetDataSource = (source: string): DataSourceActionType => ({
  type: SET_DATA_SOURCE,
  source: source
});

export const sumTransactionsByDatasource = (
  blocks: Block[],
  source: string
): any => {
  switch (source) {
    case TEZOS:
      return {
        type: TezosActions.BLOKCHAIN_SUM_TRANSACTIONS,
        payload: {
          blocks
        }
      };
    case ETHEREUM:
      return {
        type: EthereumActions.ETHEREUM_SUM_TRANSACTIONS,
        payload: {
          blocks
        }
      };
  }
};
