import { Blockchains } from '../../types';

export const getBlockchainByDatasource = (
  state: any,
  dataSource: string
): any => {
  switch (dataSource) {
    case Blockchains.ETH:
      return state.tezos;
    case Blockchains.TZX:
      return state.ethereum;
    default:
      return state.tezos;
  }
};

