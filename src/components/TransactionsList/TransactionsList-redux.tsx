import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import * as EthereumTransactions from '../../store/actions/blockchain/transactions';
import TransactionListContainer from './TransactionsList-container';
import { State, TransactionsListPropsRedux } from './types';
import { Transactions, TransactionsData } from '../../types';

const TransactionListRedux = ({ description }: TransactionsListPropsRedux) => {
  const mapState = (state: State): Transactions => ({
    status: state.ethereum.status,
    transactions: state.ethereum.transactions
  });

  const dispatch = useDispatch();

  const fetchEthereumTransactions = (transactionsData: TransactionsData): void => {
    dispatch({
      type: EthereumTransactions.FETCH_TRANSACTIONS,
      transactionsData
    });
  };

  const flushEthereumTransactions = (): void => {
    dispatch({
      type: EthereumTransactions.FLUSH_TRANSACTIONS
    });
  };

  const { status, transactions } = useMappedState(mapState);

  const actions = {
    fetchEthereumTransactions,
    flushEthereumTransactions
  };

  return (
    <TransactionListContainer
      actions={actions}
      description={description}
      status={status}
      transactions={transactions}
    />
  );
};

export default TransactionListRedux;
