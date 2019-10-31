import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';

import { useFiltersStyles, TimePeriodStyles } from './DashboardFilters-styles';
import { FiltersProps } from './types'


const Filters = (props: any) => {

  const TimePeriodSlider = withStyles(TimePeriodStyles)(Slider);

  const { actions, match } = props;

  const urlParams = match.params;

  const { enqueueSnackbar } = useSnackbar();

  const activeFilters = (filterObj: Record<string, boolean>) => Object.keys(filterObj).filter((item: string) => !!filterObj[item]);

  const checkActiveBlockchains = (label: string) => {
    const activeBlockchains = urlParams.blockchains.split(',');
    return activeBlockchains.indexOf(label) !== -1;
  }

  const checkActiveTopList = (label: string) => label === urlParams.limit;

  const [activeBlockchainButtons, setBlockchainButtons]: [Record<string, boolean>, Function] = useState({
    'BTC': checkActiveBlockchains('BTC'),
    'ETH': checkActiveBlockchains('ETH'),
    'XRP': checkActiveBlockchains('XRP'),
    'LTC': checkActiveBlockchains('LTC'),
    'BCH': checkActiveBlockchains('BCH'),
    'XTZ': checkActiveBlockchains('XTZ'),
    'ADA': checkActiveBlockchains('ADA'),
    'EOS': checkActiveBlockchains('EOS'),
    'XLM': checkActiveBlockchains('XLM')
  });

  const [activeDateButtons, setDateButtons]: [Record<string, boolean>, Function] = useState({ 'Last day': true });

  const [activePeriodTimeButtons, setPeriodTimeButtons]: [Record<string, boolean>, Function] = useState({
    'By hour': false,
    'By 10 minutes': false,
    'By minutes': true,
  });

  const [activeTopListButtons, setTopListButtons]: [Record<string, boolean>, Function] = useState({
    '10': checkActiveTopList('10'),
    '100': checkActiveTopList('100')
  });

  const [filters, setFilters]: [FiltersProps, Function] = useState({});

  let newFilters: FiltersProps = {};

  const classes = useFiltersStyles();

  const blockchainFilterHandler = (buttonLabel: string) => {
    const active = activeFilters(activeBlockchainButtons);
    if (buttonLabel === 'ETH' || buttonLabel === 'XTZ') {
      if (active.length === 1 && active.includes(buttonLabel)) {
        enqueueSnackbar('At least one blockchain required', {
          variant: 'info',
          persist: false,
        });
        return;
      }
      const buttons = { ...activeBlockchainButtons };
      buttons[buttonLabel] = !buttons[buttonLabel];
      setBlockchainButtons({ ...buttons });
    }
  };

  const zoomTopListHandler = (buttonLabel: string) => {
    const buttons = { ...activeTopListButtons };
    Object.keys(buttons).map((label: string) => (buttons[label] = false));
    buttons[buttonLabel] = true;
    setTopListButtons({ ...buttons });
  };

  const timePeriodHandler = (buttonLabel: string) => {
      const buttons = { ...activePeriodTimeButtons };
      Object.keys(buttons).map((label: string) => (buttons[label] = false));
      buttons[buttonLabel] = true;
      setPeriodTimeButtons({ ...buttons });
  };

  const filterHandler = (buttonLabel: string, filterType: Record<string, boolean>) => {
    filterType === activeBlockchainButtons && blockchainFilterHandler(buttonLabel);
    filterType === activeTopListButtons && zoomTopListHandler(buttonLabel);
    filterType === activePeriodTimeButtons && timePeriodHandler(buttonLabel);
  };

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
          onClick={() => {
            filterHandler(buttonLabel, buttonLabels);
          }}
        >
          {buttonLabel}
        </button>
      );
    });

  const setZoomFilter = () => [new Date().getTime() - 1000 * 3600 * 24, new Date().getTime()]

  const handleRefresh = (isDataFetched: boolean) => {
    const activeBlockchain = activeFilters(activeBlockchainButtons);
    const activeTopList = activeFilters(activeTopListButtons);
    const dates: number[] = setZoomFilter();

    newFilters = {
      limit: Number(activeTopList[0]),
      type: activeBlockchain,
      from: dates[0],
      to: dates[1]
    }

    setFilters({ ...newFilters });
    isDataFetched && fetchNewData(activeBlockchain);
  }

  const fetchNewData = (activeBlockchains: string[]) => {
    activeBlockchains.forEach((blockchain: string) => {
      actions.fetchWalletsByBlockchain({ limit: filters.limit, from: filters.from, to: filters.to, groupBy: urlParams.groupBy }, blockchain);
    })
  }

  useEffect((): void => {
    handleRefresh(false);
  }, [activeBlockchainButtons, activeTopListButtons, activePeriodTimeButtons]);

  return (
    <Grid container justify="flex-start" alignItems="flex-start" className="Container">
      <Grid item xs={3}>
        <Typography variant="h3">Blockchain</Typography>
        {renderButtons(activeBlockchainButtons)}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3">Date</Typography>
        <Grid container justify="flex-start" alignItems="flex-start" className="Container">
          <Grid item xs={12}>
            {renderButtons(activeDateButtons)}
          </Grid>
          <Grid item xs={12}>
            {renderButtons(activePeriodTimeButtons)}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3">By </Typography>
        <TimePeriodSlider
          defaultValue={20}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h3">Top list</Typography>
        {renderButtons(activeTopListButtons)}
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h3">Refresh</Typography>
        <Link replace={true} to={`/${match.params.groupBy}/${filters.type}/${filters.limit}/${filters.from}/${filters.to}`}>
          <AutorenewIcon className={classes.refresh} onClick={() => handleRefresh(true)} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default withRouter(Filters);
