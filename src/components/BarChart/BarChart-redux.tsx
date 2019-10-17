import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import BarChartContainer from './BarChart-container';
import { State, Customization } from './types';
import { Wallets } from '../../types';
import { getBlockchainByDatasource } from '../../store/reducers/helpers';

import * as ethereumWalletActions from '../../store/actions/ethereum/wallets';
import * as tezosWalletActions from '../../store/actions/tezos/wallets';

const BarChartRedux = (props: Customization) => {
    const dataSource  = 'ETHEREUM'

    const mapState = (state: State): Wallets => ({
        status: getBlockchainByDatasource(state, dataSource).status,
        wallets: getBlockchainByDatasource(state, dataSource).wallets
    });
    const dispatch = useDispatch();

    const { status, wallets } = useMappedState(mapState);

    const fetchEthereumWallets = (): void => {
        dispatch({
          type: ethereumWalletActions.ETHEREUM_FETCH_WALLETS,
          payload: {limit: 10}
        });
      };
    
    const fetchTezosWallets = (): void => {
        dispatch({
          type: tezosWalletActions.TEZOS_FETCH_WALLETS,
          payload: {limit: 10}
        });
      };

    const actions = {
        fetchEthereumWallets,
        fetchTezosWallets
    };

    return (
        <BarChartContainer
          actions={actions}
          status={status}
          wallets={wallets}
          override={{...props}}
        />
    )
};

export default BarChartRedux;
