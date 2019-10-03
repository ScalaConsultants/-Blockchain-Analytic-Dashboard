import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import BarChartContainer from './BarChart-container';
import { State } from './types';
import { Wallets } from '../../types';

import * as ethereumActions from '../../store/actions/ethereum/transactions';


const BarChartRedux = () => {

    const mapState = (state: State): Wallets => ({
        wallets: state.ethereum.wallets
    });
    const dispatch = useDispatch();


    const { wallets } = useMappedState(mapState);

    const fetchEthereumTransactions = (data: string): void => {
        dispatch({
            type: ethereumActions.ETHEREUM_FETCH_TRANSACTIONS,
            data: data
        });
    };

    const actions = {
        fetchEthereumTransactions
    }

    return (
        <BarChartContainer wallets={wallets} width={2000} actions={actions} />
    )
}

export default BarChartRedux;
