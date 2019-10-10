import React from 'react';
import Grid from '@material-ui/core/Grid';
import Legend from '../Legend';

const DashboardTableHeader = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={2}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            Blockchain
          </Grid>
          <Grid item xs={6}>
            Condition
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Grid container alignItems="center">
        <Grid item xs={1}>
          Value
        </Grid>
        <Grid item xs={11}>
          <Legend />
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardTableHeader;