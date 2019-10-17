import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import BarChartContainer from './BarChart-container';
import { State, Customization } from './types';
import { Wallets } from '../../types';
import { getBlockchainByDatasource } from '../../store/reducers/helpers';

import { getWalletByDatasource } from '../../store/actions/helpers';

const BarChartRedux = (props: Customization) => {
  const dataSource = 'ETHEREUM'

  const mapState = (state: State): Wallets => ({
    status: getBlockchainByDatasource(state, dataSource).status,
    wallets: getBlockchainByDatasource(state, dataSource).wallets
  });
  const dispatch = useDispatch();

  const { status, wallets } = useMappedState(mapState);

  const fetchWalletsByDataSource = (dataSource: string): void => {
    dispatch({
      type: getWalletByDatasource(dataSource),
      payload: { limit: 10 }
    });
  };

  const actions = {
    fetchWalletsByDataSource,
  };

  return (
    <BarChartContainer
      actions={actions}
      status={status}
      wallets={wallets}
      override={{ ...props }}
      dataSource={dataSource}
    />
  )
};

export default BarChartRedux;
