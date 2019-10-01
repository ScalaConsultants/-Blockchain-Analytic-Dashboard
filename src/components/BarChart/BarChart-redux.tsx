import React from 'react';
import { useMappedState } from 'redux-react-hook';

import BarChartContainer from './BarChart-container';
import { Wallets, State } from './types';

const BarChartRedux = () => {

    const mapState = (state: State): Wallets => ({
        wallets: state.ethereum.wallets
    });

    const { wallets } = useMappedState(mapState);


    return (
        <BarChartContainer wallets={wallets} width={2000} />
    )
}

export default BarChartRedux;
