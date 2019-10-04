import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import * as EthereumTransactions from '../../store/actions/ethereum/transactions';
import TransactionListContainer from './TransactionsList-container';
import { State } from './types';
import { Transactions, TransactionsData } from '../../types';

const TransactionListRedux = () => {
    const mapState = (state: State): Transactions => ({
        transactions: state.ethereum.transactions
    });

    const dispatch = useDispatch();

    const fetchEthereumTransactions = (transactionsData: TransactionsData): void => {
        dispatch({
            type: EthereumTransactions.ETHEREUM_FETCH_TRANSACTIONS,
            transactionsData: transactionsData
        });
    };

    const flushEthereumTransactions = (): void => {
        dispatch({
          type: EthereumTransactions.ETHEREUM_FLUSH_TRANSACTIONS
        });
      };

    const { transactions } = useMappedState(mapState);

    const actions = {
        fetchEthereumTransactions,
        flushEthereumTransactions
    }
    
    return (
        <TransactionListContainer transactions={transactions} actions={actions} />
    ) 
}

export default TransactionListRedux;

