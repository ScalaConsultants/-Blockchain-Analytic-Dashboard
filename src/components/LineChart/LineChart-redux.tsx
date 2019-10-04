import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import * as EthereumTransactions from '../../store/actions/ethereum/transactions-summed';

import LineChartContainer from './LineChart-container';
import { State } from './types';
import { TransactionsSummed, TransactionsSummedData } from '../../types';

const LineChartRedux = () => {
    const mapState = (state: State): TransactionsSummed => ({
        transactionsSummed: state.ethereum.transactionsSummed
    });

    const dispatch = useDispatch();

    const fetchEthereumTransactionsSummed = (transactionsSummedData: TransactionsSummedData): void => {
        dispatch({
            type: EthereumTransactions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED,
            transactionsSummedData: transactionsSummedData
        });
    };

    const { transactionsSummed } = useMappedState(mapState);

    const actions = {
        fetchEthereumTransactionsSummed
    }

    return (
        <LineChartContainer transactionsSummed={transactionsSummed} actions={actions} />
    )
}

export default LineChartRedux;
