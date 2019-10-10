import React from 'react';
import { Route } from 'react-router';
import { Container } from '@material-ui/core';
import DashboardView from '../components/DashboardView';
import DetailsView from '../components/DetailsView';

export default (): React.ReactElement => {
  const routes = (
    <Container>
      <Route exact path="/wallet/:walletHash" component={DetailsView} />
      <Route exact path="/" component={DashboardView} />
    </Container>
  );

  return routes;
};
