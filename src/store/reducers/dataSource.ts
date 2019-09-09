import { SET_DATA_SOURCE, TEZOS, ETHEREUM } from "../actions/dataSource";
import { Block } from "../../types";

const initState = "tezos";

export const dataSource = (state = initState, action: any): any => {
  switch (action.type) {
    case SET_DATA_SOURCE:
      return action.source;
    default:
      return state;
  }
};

export const getBlockchainByDatasource = (
  state: any,
  dataSource: string
): Block[] => {
  switch (dataSource) {
    case TEZOS:
      return state.tezos.blocks;
    case ETHEREUM:
      return state.ethereum.blocks;
    default:
      return state.tezos.blocks;
  }
};

export const getSummedBlockchainByDatasource = (
  state: any,
  dataSource: string
): any[] => {
  switch (dataSource) {
    case TEZOS:
      return state.tezos.summedBlocks;
    case ETHEREUM:
      return state.ethereum.summedBlocks;
    default:
      return state.tezos.summedBlocks;
  }
};
