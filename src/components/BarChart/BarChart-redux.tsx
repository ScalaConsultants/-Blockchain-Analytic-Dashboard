import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import BarChartContainer from './BarChart-container';
import { State, Customization } from './types';
import { Wallets } from '../../types';
import { getBlockchainByDatasource } from '../../store/reducers/blockchainSelectors';
import { getWalletByDatasource } from '../../store/actions/blockchainSelectors';
import { withRouter } from 'react-router-dom';

const BarChartRedux = (props: Customization) => {
  const { walletSource, match }  = props;

  const mapState = (state: State): Wallets => ({
    status: getBlockchainByDatasource(state, walletSource || match.params.walletSource).status,
    wallets: getBlockchainByDatasource(state, walletSource || match.params.walletSource).wallets
  });
  const dispatch = useDispatch();

  const { status, wallets } = useMappedState(mapState);

  const fetchWalletsByBlockchain = (groupBy: string, blockchain: string): void => {
    dispatch({
      type: getWalletByDatasource(blockchain),
      payload: { limit: 10, groupBy }
    });
  };

  const actions = {
    fetchWalletsByBlockchain
  };

  return (
    <BarChartContainer
      actions={actions}
      status={status}
      wallets={wallets}
      override={{ ...props }}
    />
  )

};

export default withRouter(BarChartRedux);
