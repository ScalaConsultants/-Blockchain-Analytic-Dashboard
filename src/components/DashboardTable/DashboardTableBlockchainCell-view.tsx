import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useDashboardTableStyles } from './DashboardTable-styles';
import { BlockchainCell } from './types'

const DashboardTableBlockchainCell = ({ icon, fullName }: BlockchainCell) => {
  const { PUBLIC_URL } = process.env;
  const classes = useDashboardTableStyles();
  return (
    <Grid container alignItems="center" justify="flex-start">
      <Grid item xs={3}>
        <img src={`${PUBLIC_URL}/icons/${icon}.png`} className={classes.img} alt="Blockchain cell icon"/>
      </Grid>
      <Grid item xs={9} className={classes.name}>
        {fullName}
      </Grid>
    </Grid>
  )
};

export default DashboardTableBlockchainCell;