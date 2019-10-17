import React from 'react';
import Filters from '../DashboardFilters';
import DashboardTabs from '../DashboardTabs';
import DashboardTable from '../DashboardTable';
import View from '../View';

const DashboardView = () => (
  <View>
    <Filters />
    <DashboardTabs />
    <DashboardTable />
  </View>
);

export default DashboardView;
