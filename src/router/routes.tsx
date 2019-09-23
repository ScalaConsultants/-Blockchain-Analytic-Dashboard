import React from 'react';
import { Route } from 'react-router';
import { Container } from '@material-ui/core';
import Transactions from '../containers/Transactions/Transactions';
import LineCharts from '../containers/Charts/Line';
import StackedBarChartDemo from '../containers/customChartsDemos/StackedBarChartDemo/StackedBarChartDemo';

export default (): React.ReactElement => {
  const routes = (
    <Container>
      <Route exact path="/" component={LineCharts} />
      <Route exact path="/transactions" component={Transactions} />
      <Route exact path="/line-chart" component={LineCharts} />
      <Route exact path="/stacked-bar-chart-demo" component={StackedBarChartDemo} />
    </Container>
  );

  return routes;
};
