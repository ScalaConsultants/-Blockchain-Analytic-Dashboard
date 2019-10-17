import React from 'react';
import Filters from '../DashboardFilters';
import DashboardTabs from '../DashboardTabs';
import DashboardTable from '../DashboardTable';

const DashboardView = () => (
  <>
    <Filters />
    <DashboardTabs />
    <DashboardTable />
  </>
);

export default DashboardView;
