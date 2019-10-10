import React from 'react';
import Grid from '@material-ui/core/Grid';
import Legend from '../Legend';

const DashboardTableHeader = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={4}>Blockchain</Grid>
          <Grid item xs={4}>Condition</Grid>
          <Grid item xs={4}>Value</Grid>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <Legend />
      </Grid>
    </Grid>
  )
};

export default DashboardTableHeader;