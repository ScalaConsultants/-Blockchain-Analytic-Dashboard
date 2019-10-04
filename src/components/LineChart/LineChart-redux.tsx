import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import * as EthereumTransactions from '../../store/actions/ethereum/transactions-summed';

import LineChartContainer from './LineChart-container';
import {State, Transactions} from './types';

const LineChartRedux = () => {
    const mapState = (state: State): Transactions => ({
        transactions: state.ethereum.transactions
    });

    const dispatch = useDispatch();

    const fetchEthereumTransactionsSummed = (data:string): void => {
        dispatch({
            type: EthereumTransactions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED,
            data: data
        });
    };

    const { transactions } = useMappedState(mapState);

    const actions = {
        fetchEthereumTransactionsSummed
    }

    return (
        <LineChartContainer transactions={transactions} actions={actions} />
    )
}

export default LineChartRedux;
