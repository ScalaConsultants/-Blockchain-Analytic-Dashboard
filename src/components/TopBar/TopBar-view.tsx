import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AuthModal from '../AuthModal';
import UserMenu from '../UserMenu';

import { useTopBarStyles } from './TopBar-styles';

const TopBar = () => {
  const { PUBLIC_URL } = process.env;
  const classes = useTopBarStyles();
  const classesLogo = clsx([classes.logo, classes.flex]);
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classesLogo}>
          <img src={`${PUBLIC_URL}/icons/logo.png`} alt="logo" className={classes.img} />
        </div>
        <AuthModal />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
