import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';

import LineChartContainer from './LineChart-container';
import { State } from './types';
import { TransactionsSummed, TransactionsSummedData } from '../../types';
import { fetchTransactionsSummedByBlockchain } from '../../store/actions/blockchainSelectors';
import { getBlockchainByDatasource } from '../../store/reducers/blockchainSelectors';
import { LineChartReduxProps } from './types';

const LineChartRedux = (props:LineChartReduxProps) => {

    const blockchain = props.match.params.walletSource;

    const mapState = (state: State): TransactionsSummed => ({
        status: getBlockchainByDatasource(state, blockchain).status,
        transactionsSummed: getBlockchainByDatasource(state, blockchain).transactionsSummed
    });

    const dispatch = useDispatch();

    const fetchTransactionsSummed = (blockchain:string, transactionsSummedData: TransactionsSummedData): void => {
        dispatch({
            type: fetchTransactionsSummedByBlockchain(blockchain),
            transactionsSummedData: transactionsSummedData
        });
    };

    const { status, transactionsSummed } = useMappedState(mapState);

    const actions = {
        fetchTransactionsSummed
    };

    return (
        <LineChartContainer
          actions={actions}
          status={status}
          transactionsSummed={transactionsSummed}
          params={props.match.params}
        />
    );
};

export default withRouter(LineChartRedux);
