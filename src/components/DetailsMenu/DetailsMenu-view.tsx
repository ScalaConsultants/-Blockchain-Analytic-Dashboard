import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EditWalletModal from '../EditWalletModal';
import { DetailsMenuStyles } from './DetailsMenu-styles';
import { ViewProps } from './types';

const DetailsMenu = ({ id, address, description, updateDescription }: ViewProps) => {
  const classes = DetailsMenuStyles();
  const classesRoot = clsx([classes.root, classes.fonts]);
  const classesInfo = clsx([classes.margin, classes.white])

  return (
    <Grid 
      container 
      direction="row"
      alignItems="center" 
      className={classesRoot}>
        <Grid item xs={1}>
          <Button
            className={classes.back}
            startIcon={<ArrowBackIosIcon fontSize="inherit" />}
          >
            back
        </Button>
        </Grid>
        <Grid item xs={8}>
          <Grid container alignItems="center" className={classesInfo}>
            <Grid item xs={2}>ID</Grid>
            <Grid item xs={10}>{id}</Grid>
          </Grid>
        <Grid container alignItems="center" className={classes.grey}>
            <Grid item xs={2}>Address</Grid>
            <Grid item xs={10}>{address}</Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <EditWalletModal
            id={id}
            address={address}
            description={description}
            update={updateDescription} />
        </Grid>
        <Grid item xs={1}>{/*TODO: import description component*/}</Grid>
    </Grid>
  );
};

export default DetailsMenu;