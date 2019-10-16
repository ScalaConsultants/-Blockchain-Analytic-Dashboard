import React from 'react';
import { useDispatch } from 'redux-react-hook';

import * as ethereumWalletActions from '../../store/actions/ethereum/wallets';
import * as tezosWalletActions from '../../store/actions/tezos/wallets';

import FiltersContainer from './DashboardFilters-container';

const FiltersRedux = () => {
  const dispatch = useDispatch();

  
  const fetchEthereumWallets = (payload: any = 1): void => {
    dispatch({
      type: ethereumWalletActions.ETHEREUM_FETCH_WALLETS,
      payload: payload
    });
  };

  const fetchTezosWallets = (payload: any = 1): void => {
    dispatch({
      type: tezosWalletActions.TEZOS_FETCH_WALLETS,
      payload: payload
    });
  };

  const actions = {
    fetchEthereumWallets,
    fetchTezosWallets
  };

  return (
    <FiltersContainer actions={actions} />
  );
};

export default FiltersRedux;
