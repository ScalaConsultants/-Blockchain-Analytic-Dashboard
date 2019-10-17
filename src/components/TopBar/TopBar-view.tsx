import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import { useTopBarStyles } from './TopBar-styles';

const TopBar = () => {
  const classes = useTopBarStyles();
  const classesLogo = clsx([classes.logo, classes.flex]);
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classesLogo}>
          <img src="./icons/logo.png" className={classes.img} />
        </div>
        <Typography>Login</Typography>
      </Toolbar>
  </AppBar>
  )
}

export default TopBar;