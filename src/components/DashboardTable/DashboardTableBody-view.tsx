import React from 'react';
import Grid from '@material-ui/core/Grid';
import BarChart from '../BarChart';
import { useDashboardTableStyles } from './DashboardTable-styles';

const DashboardTableBody = () => {
  const classes = useDashboardTableStyles();
  return (
    <Grid container alignItems="center">
      <Grid item xs={3}>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Grid container alignItems="center" justify="flex-start">
              <Grid item xs={3}>
                <img src="./icons/eth.png" className={classes.img}/>
              </Grid>
              <Grid item xs={9}>Ethereum</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container alignItems="center" justify="flex-start">
              <Grid item xs={4}>Good</Grid>
              <Grid item xs={8}><div className={classes.dot}></div></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <BarChart />
      </Grid>
    </Grid>
  )
};

export default DashboardTableBody;

