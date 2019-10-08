import React from 'react';
import LegendView from './Legend-view';
import { LegendContainer } from './Legend-styles';

const Legend = () => {
  const classes = LegendContainer();
  return (
    <div className={classes.root}>
      <h5 className={classes.title}>Legend:</h5>
      <LegendView />
    </div>
  );
};

export default Legend;
