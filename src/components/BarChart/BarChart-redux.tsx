import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import BarChartContainer from './BarChart-container';
import { State } from './types';
import { Wallets, TransactionsSummedData} from '../../types';

import * as transactionsActions from '../../store/actions/ethereum/transactions-summed';
import * as walletActions from '../../store/actions/ethereum/wallets';


const BarChartRedux = () => {

    const mapState = (state: State): Wallets => ({
        wallets: state.ethereum.wallets
    });
    const dispatch = useDispatch();


    const { wallets } = useMappedState(mapState);

    const fetchEthereumTransactionsSummed = (transactionsSummedData: TransactionsSummedData): void => {
        dispatch({
            type: transactionsActions.ETHEREUM_FETCH_TRANSACTIONS_SUMMED,
            transactionsSummedData: transactionsSummedData
        });
    };

    const fetchEthereumWallets = (): void => {
        dispatch({
          type: walletActions.ETHEREUM_FETCH_WALLETS
        });
      };

    const actions = {
        fetchEthereumTransactionsSummed,
        fetchEthereumWallets
    }

    return (
        <BarChartContainer wallets={wallets} width={2000} actions={actions} />
    )
}

export default BarChartRedux;
