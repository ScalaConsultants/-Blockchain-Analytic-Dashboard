import React from 'react';
import { Route, Redirect } from 'react-router';
import { Container } from '@material-ui/core';
import DashboardView from '../components/DashboardView';
import DetailsView from '../components/DetailsView';
import TopBar from '../components/TopBar';

export default (): React.ReactElement => {
  const routes = (
    <Container>
      <TopBar />
      <Route exact path="/wallet/:walletHash/:groupBy/:blockchains/:limit/:from/:to" component={DetailsView} />
      <Route exact path="/:groupBy/:blockchains/:limit/:from/:to" component={DashboardView} />
      <Route path="/">
        <Redirect to="/buyer/ETH,XTZ/10/1567296000/1567382400" />
      </Route>
    </Container>
  );

  return routes;
};
