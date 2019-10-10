import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import DashboardTableHeader from './DashboardTableHeader-view';
import DashboardTableBody from './DashboardTableBody-view';
import { useDashboardTableStyles } from './DashboardTable-styles';
 
const DashboardTableView = () => {
  const classes = useDashboardTableStyles();
  const rootClasses = clsx([classes.fonts, classes.grey]);
  return (
    <div className={rootClasses}>
      <DashboardTableHeader />
      <DashboardTableBody />
    </div>
  )
};

export default DashboardTableView;