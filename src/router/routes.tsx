import React from 'react';
import { Container } from '@material-ui/core';
import DashboardView from '../components/DashboardView';
import DetailsView from '../components/DetailsView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default (): React.ReactElement => {
  const routes = (
    <Router>
      <Switch>
      <Route exact path="/wallet/:walletHash" component={DetailsView} />
      <Route exact path="/" component={DashboardView} />
      </Switch>
    </Router>
  );

  return routes;
};
