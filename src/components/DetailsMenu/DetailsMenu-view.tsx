import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import EditWalletModal from '../EditWalletModal';
import ChartDescription from '../ChartDescription';
import DetailsMenuStyles from './DetailsMenu-styles';
import { ViewProps } from './types';
import ButtonBack from '../ButtonBack';

const DetailsMenu = ({ id, address, description, updateDescription, type, blockchain, activeFilters }: ViewProps) => {
  const { tab, zoom, top } = activeFilters;
  const classes = DetailsMenuStyles();
  const classesRoot = clsx([classes.root, classes.fonts, classes.fontWeightBold]);
  const classesInfo = clsx([classes.margin, classes.white]);
  const classesFilters = clsx([classes.margin, classes.grey, classes.fontWeightNormal]);

  return (
    <Grid container direction="row" alignItems="center" className={classesRoot}>
      <Grid item xs={1}>
        <ButtonBack/>
      </Grid>
      <Grid item xs={8}>
        <Grid container alignItems="center" className={classesInfo}>
          <Grid item xs={2}>
            ID
          </Grid>
          <Grid item xs={10}>
            {id}
          </Grid>
        </Grid>
        <Grid container alignItems="center" className={classes.grey}>
          <Grid item xs={2}>
            Address
          </Grid>
          <Grid item xs={10}>
            {address}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <EditWalletModal id={id} address={address} description={description} update={updateDescription} />
      </Grid>
      <Grid item xs={1}>
        <ChartDescription type={type} blockchain={blockchain} />
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="center" className={classesFilters}>
        <Grid item xs={1}>
          FILTERS
        </Grid>
        <Grid item xs={1}>
          {tab}
        </Grid>
        <Grid item xs={1}>
          {zoom}
        </Grid>
        <Grid item xs={1}>
          {`Top ${top}`}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsMenu;
