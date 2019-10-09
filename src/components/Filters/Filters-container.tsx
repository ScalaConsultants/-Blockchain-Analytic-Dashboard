import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';

import useFiltersStyles from './Filters-styles';

const Filters = () => {
  const classes = useFiltersStyles();
  const blockchains: string[] = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'XTZ', 'ADA', 'EOS', 'XLM'];
  const activeClasses = [classes.button, classes.active]

  const filterHandler = (eventTarget: HTMLBodyElement) => {
    const active: boolean = eventTarget.className === classes.button;
    active && (eventTarget.className = activeClasses.join(' '));
    !active && (eventTarget.className = classes.button);
  }

  const renderButtons = (data: string[]) =>
    data.map((button: string, index: number) => (
      <button
        className={classes.button}
        key={button}
        onClick={(e: any) => filterHandler(e.target)}
      >
        {button}
      </button>
    ))

  return (
    <Grid container justify="flex-start" alignItems="center" className="Container">
      <Grid item xs={3}>
        {renderButtons(blockchains)}
      </Grid>
      <Grid item xs={3}>
        Filter - Blockchain Zoom
      </Grid>
      <Grid item xs={3}>
        Filter - Blockchain Date Range
      </Grid>
      <Grid item xs={3}>
        Filter - Blockchain Top List
      </Grid>
    </Grid>
  )
}

export default Filters;
