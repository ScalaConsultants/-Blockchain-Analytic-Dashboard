import React from 'react';
import Grid from '@material-ui/core/Grid';

const DashboardTableBody = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={2}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            Blockchain
          </Grid>
          <Grid item>
            Good
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        Chart
      </Grid>
    </Grid>
  )
};

export default DashboardTableBody;

