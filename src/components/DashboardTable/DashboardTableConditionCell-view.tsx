import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useDashboardTableStyles } from './DashboardTable-styles';

const DashboardTableConditionCell = () => {
  const classes = useDashboardTableStyles();
  return (
    <Grid container alignItems="center" justify="flex-start">
        <Grid item xs={4}>
          Good
        </Grid>
        <Grid item xs={8}>
          <div className={classes.dot}></div>
        </Grid>
    </Grid>
  )
};

export default DashboardTableConditionCell;