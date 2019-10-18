import { Blockchains } from '../../types';

export const getBlockchainByDatasource = (
  state: any,
  dataSource: string
): any => {
  switch (dataSource) {
    case Blockchains.XTZ:
      return state.tezos;
    case Blockchains.ETH:
      return state.ethereum;
    default:
      return state.tezos;
  }
};

