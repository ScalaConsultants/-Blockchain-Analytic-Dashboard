import React from 'react';
import { withRouter } from 'react-router-dom';

import DashboardTableView from './DashboardTable-view';

import { BlockchainCell, Props } from './types';

const DashboardTable = ({ match: { params: { blockchains }}}: Props) => {

  const blockchainNamesMap: any = {
    ETH: { name: 'ETH', icon: 'eth', fullName: 'Ethereum'},
    XTZ: { name: 'XTZ', icon: 'tezos', fullName: 'Tezos'}
  }

  const rows = blockchains.split(',').map((name: string): BlockchainCell  => blockchainNamesMap[name]);

  return (
    <DashboardTableView rows={rows}/>
  );
}

export default withRouter(DashboardTable);