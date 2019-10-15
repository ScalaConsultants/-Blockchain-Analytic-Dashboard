import React from 'react';
import { useDispatch } from 'redux-react-hook';

import * as walletActions from '../../store/actions/blockchain/wallets';

import TabsContainer from './DashboardTabs-container';

const TabsRedux = () => {
  const dispatch = useDispatch();

  
  const fetchEthereumWallets = (payload: any = 1): void => {
    dispatch({
      type: walletActions.FETCH_WALLETS,
      payload: payload
    });
  };

  const actions = {
    fetchEthereumWallets
  };

  return (
    <TabsContainer actions={actions} />
  );
};

export default TabsRedux;
