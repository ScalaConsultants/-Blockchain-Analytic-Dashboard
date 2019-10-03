import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import * as EthereumTransactions from '../../store/actions/ethereum/transactions';
import TransactionListContainer from './TransactionsList-container';
import {State, Transactions} from './types';

const TransactionListRedux = () => {
    const mapState = (state: State): Transactions => ({
        transactions: state.ethereum.transactions
    });

    const dispatch = useDispatch();

    const fetchEthereumTransactions = (data:string): void => {
        dispatch({
            type: EthereumTransactions.ETHEREUM_FETCH_TRANSACTIONS,
            data: data
        });
    };

    const { transactions } = useMappedState(mapState);

    const actions = {
        fetchEthereumTransactions
    }
    
    return (
        <TransactionListContainer transactions={transactions} actions={actions} />
    ) 
}

export default TransactionListRedux;

