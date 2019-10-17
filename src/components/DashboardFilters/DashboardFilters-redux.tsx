import React from 'react';
import { useDispatch } from 'redux-react-hook';

import * as ethereumWalletActions from '../../store/actions/ethereum/wallets';
import * as tezosWalletActions from '../../store/actions/tezos/wallets';
import { getWalletByDatasource } from '../../store/actions/helpers';

import FiltersContainer from './DashboardFilters-container';

const FiltersRedux = () => {
  const dispatch = useDispatch();
  
  const fetchWalletsByDataSource = (payload: number = 1, dataSource:string): void => {
    dispatch({
      type: getWalletByDatasource(dataSource),
      payload: payload
    });
  };

  const actions = {
    fetchWalletsByDataSource,
  };

  return (
    <FiltersContainer actions={actions} />
  );
};

export default FiltersRedux;
