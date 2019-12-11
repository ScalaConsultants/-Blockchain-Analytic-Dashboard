import React from 'react';

import DashboardTableView from './DashboardTable-view';

import { BlockchainCell, Props } from './types';

const DashboardTable = ({ blockchains, type, currency, actions}: Props) => {

  const blockchainNamesMap: any = {
    ETH: { name: 'ETH', icon: 'eth', fullName: 'Ethereum'},
    XTZ: { name: 'XTZ', icon: 'tezos', fullName: 'Tezos'}
  };

  const rows = blockchains.split(',').map((name: string): BlockchainCell  => blockchainNamesMap[name]);
  const props = {
    currency,
    actions,
    type
  };

  return (
    <DashboardTableView rows={rows} {...props}/>
  );
};

export default DashboardTable;
