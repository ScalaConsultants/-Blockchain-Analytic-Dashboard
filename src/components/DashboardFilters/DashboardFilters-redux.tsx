import React from 'react';
import { useDispatch } from 'redux-react-hook';

import FiltersContainer from './DashboardFilters-container';

const FiltersRedux = () => {

  const mapState = (state: any): any => ({
    ethereumStatus: state.ethereum.status,
    ethereumTransactions: state.ethereum.transactions,
    tezosTransactions: state.tezos.transactions
  });

  const dispatch = useDispatch();

  

  return (
    <FiltersContainer />
  );
};

export default FiltersRedux;
