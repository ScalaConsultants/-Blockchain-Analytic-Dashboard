import React from 'react';
import Grid from '@material-ui/core/Grid';
import DashboardTableHeader from './DashboardTableHeader-view';
import DashboardTableBody from './DashboardTableBody-view';

const DashboardTableView = () => {
  return (
    <>
      <DashboardTableHeader />
      <DashboardTableBody />
    </>
  )
};

export default DashboardTableView;