import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import clsx from 'clsx';

import useFiltersStyles from './Filters-styles';

const Filters = () => {
  const classes = useFiltersStyles();
  const [activeBlockchainButtons, setBlockchainButtons]: [ Record<string, boolean>, Function] = useState({
    'BTC': false,
    'ETH': true,
    'XRP': false,
    'LTC': false,
    'BCH': false,
    'XTZ': true,
    'ADA': false,
    'EOS': false,
    'XLM': false
  });

  const filterHandler = (label: string) => {
    if (label === 'ETH' || label === 'XTZ') {
      const buttons = activeBlockchainButtons;
      buttons[label] = !buttons[label];
      setBlockchainButtons({ ...buttons });
    }
  };

  const renderButtons = (labels: Record<string, boolean>) =>
    Object.keys(labels).map((label: string) => {
      const btnClass = clsx(classes.button, {
        [classes.active]: activeBlockchainButtons[label]
      });
      return (
        <button
          type="button"
          className={btnClass}
          key={label}
          onClick={() => filterHandler(label)}
        >
          {label}
        </button>
      );
    });

  return (
    <Grid container justify="flex-start" alignItems="center" className="Container">
      <Grid item xs={3}>
        {renderButtons(activeBlockchainButtons)}
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
  );
};

export default Filters;
