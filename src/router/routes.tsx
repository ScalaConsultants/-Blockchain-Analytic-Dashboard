import React from 'react';
import { Route } from 'react-router';
import { Container } from '@material-ui/core';
import DetailsView from '../components/DetailsView';

export default (): React.ReactElement => {
  const routes = (
    <Container>
      <Route exact path="/" component={DetailsView} />
      <Route exact path="/:walletHash" component={DetailsView} />
    </Container>
  );

  return routes;
};
