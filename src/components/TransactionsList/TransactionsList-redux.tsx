import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';

import { fetchTransactionsByDatasource, flushTransactionstByDatasource } from '../../store/actions/blockchainSelectors';
import { getBlockchainByDatasource } from '../../store/reducers/blockchainSelectors';

import TransactionListContainer from './TransactionsList-container';
import { State, TransactionsListPropsRedux } from './types';
import { Transactions, TransactionsData } from '../../types';

const TransactionListRedux = (props: any) => {
  const mapState = (state: State): Transactions => ({
    status: getBlockchainByDatasource(state, blockchain).status,
    transactions: getBlockchainByDatasource(state, blockchain).transactionsSummed
    });

  const blockchain = props.match.params.walletSource;
  const description = props.description;


  const dispatch = useDispatch();

  const fetchTransactions = (transactionsData: TransactionsData): void => {
    dispatch({
      type: fetchTransactionsByDatasource(blockchain),
      transactionsData
    });
  };

  const flushTransactions = (): void => {
    dispatch({
      type: flushTransactionstByDatasource(blockchain),
    });
  };

  const { status, transactions } = useMappedState(mapState);

  const actions = {
    fetchTransactions,
    flushTransactions
  };

  return (
    <TransactionListContainer
      actions={actions}
      description={description}
      status={status}
      transactions={transactions}
      params={props.match.params}
    />
  );
};

export default withRouter(TransactionListRedux);
