import React from 'react';
import Filters from '../Filters';
import DashboardTabs from '../DashboardTabs';
import DashboardTable from '../DashboardTable';

const DashboardView = () => {

  return (
    <>
      <Filters />
      <DashboardTabs />
      <DashboardTable />
    </>
  )
}

export default DashboardView;