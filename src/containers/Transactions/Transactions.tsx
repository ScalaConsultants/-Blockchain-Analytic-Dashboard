import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import TransactionList from '../../components/TransactionList/TransactionList';

const Transactions = (): React.ReactElement => {
  return (
    <Grid container spacing={9} className="Container">
      <Grid item xs={12} lg={12}>
        <h1 id="client-manager-title" className="Transactions__header">
          Transactions list
        </h1>
      </Grid>
      <Grid>
        <TransactionList />
      </Grid>
    </Grid>
  );
};

export default Transactions;
