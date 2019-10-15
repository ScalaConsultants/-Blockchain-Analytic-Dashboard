import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import * as EthereumTransactions from '../../store/actions/blockchain/transactions-summed';

import LineChartContainer from './LineChart-container';
import { State } from './types';
import { TransactionsSummed, TransactionsSummedData } from '../../types';

const LineChartRedux = () => {
    const mapState = (state: State): TransactionsSummed => ({
        status: state.ethereum.status,
        transactionsSummed: state.ethereum.transactionsSummed
    });

    const dispatch = useDispatch();

    const fetchEthereumTransactionsSummed = (transactionsSummedData: TransactionsSummedData): void => {
        dispatch({
            type: EthereumTransactions.FETCH_TRANSACTIONS_SUMMED,
            transactionsSummedData: transactionsSummedData
        });
    };

    const { status, transactionsSummed } = useMappedState(mapState);

    const actions = {
        fetchEthereumTransactionsSummed
    };

    return (
        <LineChartContainer
          actions={actions}
          status={status}
          transactionsSummed={transactionsSummed}
        />
    );
};

export default LineChartRedux;
