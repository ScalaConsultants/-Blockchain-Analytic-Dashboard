import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import BarChartContainer from './BarChart-container';
import { State, Customization } from './types';
import { Wallets } from '../../types';

import * as walletActions from '../../store/actions/ethereum/wallets';

const BarChartRedux = (props: Customization) => {

    const mapState = (state: State): Wallets => ({
        status: state.ethereum.status,
        wallets: state.ethereum.wallets
    });
    const dispatch = useDispatch();

    const { status, wallets } = useMappedState(mapState);

    const fetchEthereumWallets = (): void => {
        dispatch({
          type: walletActions.ETHEREUM_FETCH_WALLETS
        });
      };

    const actions = {
        fetchEthereumWallets
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
