import React from 'react';
import DashboardTableView from './DashboardTable-view';

const createData = (name: string, icon: string ) => ({ name, icon })

const rows = [
  createData('Ethereum', 'eth'),
  createData('Tezos', 'tezos'),
];

const DashboardTable = () => {
  return (
    <DashboardTableView rows={rows}/>
  );
}

export default DashboardTable;