import React from 'react';
import DashboardTableRow from './DashboardTableRow-view';
import { Table } from './types';

const DashboardTableBody = ({ rows }: Table): any => 
  rows.map((row) => <DashboardTableRow row={row} key={row.name} />);

export default DashboardTableBody;

