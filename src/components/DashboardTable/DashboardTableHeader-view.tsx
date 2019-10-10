import React from 'react';
import Grid from '@material-ui/core/Grid';
import Legend from '../Legend';
import { useDashboardTableStyles } from './DashboardTable-styles';
 
const DashboardTableHeader = () => {
  const classes = useDashboardTableStyles();
  return (
    <Grid container alignItems="center" className={classes.header}>
      <Grid item xs={3}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            Blockchain
          </Grid>
          <Grid item xs={6}>
            Condition
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
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