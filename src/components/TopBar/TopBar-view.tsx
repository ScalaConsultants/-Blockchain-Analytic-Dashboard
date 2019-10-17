import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { useTopBarStyles } from './TopBar-styles';

const TopBar = () => {
  const { PUBLIC_URL } = process.env;
  const classes = useTopBarStyles();
  const classesLogo = clsx([classes.logo, classes.flex]);
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classesLogo}>
          <img src={`${PUBLIC_URL}/icons/logo.png`} className={classes.img} />
        </div>
        <Typography variant="body1" color="secondary">
            Log in
          </Typography>
          <ArrowDropDownIcon color="secondary"/>
      </Toolbar>
  </AppBar>
  )
}

export default TopBar;