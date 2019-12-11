import React from 'react';
import clsx from 'clsx';
import DashboardTableHeader from './DashboardTableHeader-container';
import DashboardTableBody from './DashboardTableBody-view';
import { useDashboardTableStyles } from './DashboardTable-styles';
import { Table } from './types';
 
const DashboardTableView = ({ rows, currency, actions, type }: Table) => {
  const classes = useDashboardTableStyles();
  const rootClasses = clsx([classes.fonts, classes.grey]);
  return (
    <div className={rootClasses}>
      <DashboardTableHeader currency={currency} type={type} actions={actions}/>
      <DashboardTableBody rows={rows}/>
    </div>
  )
};

export default DashboardTableView;