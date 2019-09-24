import React from 'react';
import { Route } from 'react-router';
import { Container } from '@material-ui/core';
import StackedBarChartDemo from '../containers/customChartsDemos/StackedBarChartDemo/StackedBarChartDemo';
import DetailsView from '../components/DetailsView';

export default (): React.ReactElement => {
  const routes = (
    <Container>
      <Route exact path="/" component={DetailsView} />
      <Route exact path="/stacked-bar-chart-demo" component={StackedBarChartDemo} />
    </Container>
  );

  return routes;
};
