import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import clsx from 'clsx';

import useFiltersStyles from './DashboardFilters-styles';
import { Link } from '@material-ui/core';

const Filters = (props: any) => {

  const { actions } = props;

  console.log(actions)

  const [activeBlockchainButtons, setBlockchainButtons]: [Record<string, boolean>, Function] = useState({
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

  const [activeZoomButtons, setZoomButtons]: [Record<string, boolean>, Function] = useState({
    '1 day': true,
    '7 days': false,
    // '1 month': false,
    // '3 months': false,
    // '1 year': false,
    // 'All': false
  });

  const [activeTopListButtons, setTopListButtons]: [Record<string, boolean>, Function] = useState({
    '10': true,
    '100': false,
    '1000': false
  });

  const classes = useFiltersStyles();

 //const [filters, setFilters]: [string, Function] = useState(' ');

  const blockchainFilterHandler = (buttonLabel: string) => {
    if (buttonLabel === 'ETH' || buttonLabel === 'XTZ') {
      const buttons = { ...activeBlockchainButtons };
      buttons[buttonLabel] = !buttons[buttonLabel];
      setBlockchainButtons({ ...buttons });
    }
  };

  const zoomFilterHandler = (buttonLabel: string) => {
    const buttons = { ...activeZoomButtons };
    Object.keys(buttons).filter((label: string) => (buttons[label] = false));
    buttons[buttonLabel] = true;
    setZoomButtons({ ...buttons });
  };

  const zoomTopListHandler = (buttonLabel: string) => {
    const buttons = { ...activeTopListButtons };
    Object.keys(buttons).map((label: string) => (buttons[label] = false));
    buttons[buttonLabel] = true;
    setTopListButtons({ ...buttons });
  };

  const filterHandler = (buttonLabel: string, filterType: Record<string, boolean>) => {
    filterType === activeBlockchainButtons && blockchainFilterHandler(buttonLabel);
    filterType === activeZoomButtons && zoomFilterHandler(buttonLabel);
    filterType === activeTopListButtons && zoomTopListHandler(buttonLabel);
  };

  const activeFilters = (filterObj: any) => Object.keys(filterObj).filter((item: any) =>  filterObj[item] === true);

  // useEffect((): any => {
  //   const activeBlockchain = activeFilters(activeBlockchainButtons);
  //   const activeZoom = activeFilters(activeZoomButtons);
  //   const activeTopList = activeFilters(activeTopListButtons);
  //   setFilters({ activeBlockchain, activeZoom, activeTopList});

  // }, [activeBlockchainButtons, activeZoomButtons, activeTopListButtons]);

  

  const renderButtons = (buttonLabels: Record<string, boolean>) =>
    Object.keys(buttonLabels).map((buttonLabel: string) => {
      const btnClass = clsx(classes.button, {
        [classes.active]: buttonLabels[buttonLabel]
      });
      return (
        <button
          type="button"
          className={btnClass}
          key={buttonLabel}
          onClick={() => filterHandler(buttonLabel, buttonLabels)}
        >
          {buttonLabel}
        </button>
      );
    });

  const handleRefresh = () => {
    const activeBlockchain = activeFilters(activeBlockchainButtons);
    const activeZoom = activeFilters(activeZoomButtons);
    const activeTopList = activeFilters(activeTopListButtons);

    actions.fetchEthereumWallets({limit: Number(activeTopList[0])});
    //setFilters({ activeBlockchain, activeZoom, activeTopList});
  }

  return (
    <Grid container justify="flex-start" alignItems="flex-start" className="Container">
      <Grid item xs={3}>
        <Typography variant="h3">Blockchain</Typography>
        {renderButtons(activeBlockchainButtons)}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3">Zoom</Typography>
        {renderButtons(activeZoomButtons)}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3">Top list</Typography>
        {renderButtons(activeTopListButtons)}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3">Refresh</Typography>
        {/* <Link to={`/filters/${filters}`}> */}
        <AutorenewIcon className={classes.refresh} onClick={handleRefresh} />
        {/* </Link> */}
      </Grid>
    </Grid>
  );
};

export default Filters;
