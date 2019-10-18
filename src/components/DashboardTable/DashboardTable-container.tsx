import React from 'react';
import { withRouter } from 'react-router-dom';

import DashboardTableView from './DashboardTable-view';

import { Table } from './types';

const DashboardTable = (props: any) => {
  const { match: { params: { blockchains } } } = props;

  const blockchainNamesMap: any = {
    ETH: { name: 'ethereum', icon: 'eth'},
    XTZ: { name: 'tezos', icon: 'tezos'}
  }

  const rows = blockchains.split(',').map((name: string): Table  => blockchainNamesMap[name]);

  return (
    <DashboardTableView rows={rows}/>
  );
}

export default withRouter(DashboardTable);