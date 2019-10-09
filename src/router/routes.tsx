import React from 'react';
import { Route } from 'react-router';
import { Container } from '@material-ui/core';
import DetailsView from '../components/DetailsView';
import Filters from '../components/Filters';

export default (): React.ReactElement => {
  const routes = (
    <Container>
      <Route exact path="/filters" component={Filters} />
      <Route exact path="/:walletHash" component={DetailsView} />
      <Route exact path="/" component={DetailsView} />
    </Container>
  );

  return routes;
};
