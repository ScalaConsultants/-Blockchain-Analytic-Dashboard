export const getBlockchainByDatasource = (
    state: any,
    dataSource: string
   ): any => {
    switch (dataSource) {
      case 'TEZOS':
        return state.tezos;
      case 'ETHEREUM':
        return state.ethereum;
      default:
        return state.tezos;
    }
   };

