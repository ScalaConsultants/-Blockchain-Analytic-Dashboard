import React from 'react';
import { useMappedState } from 'redux-react-hook';

import LineChartContainer from './LineChart-container';
import {State, Transactions} from './types';

const LineChartRedux = () => {
    const mapState = (state: State): Transactions => ({
        transactions: state.ethereum.transactions
    });

    const { transactions } = useMappedState(mapState);

    return (
        <LineChartContainer transactions={transactions} />
    )
}

export default LineChartRedux;
