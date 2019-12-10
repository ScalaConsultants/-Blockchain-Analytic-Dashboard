/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';

import TimePeriodFilter from './TimePeriodFilter';
import WatchListFilter from './WatchListFilter';
import useFiltersStyles from './DashboardFilters-styles';
import { translateTimePeriod } from './helpers';
import { FiltersProps } from './types';

const Filters = (props: any) => {
  const { actions, match, showWatchedOnly } = props;

  const urlParams = match.params;

  const { enqueueSnackbar } = useSnackbar();

  const activeFilters = (filterObj: Record<string, boolean>): string[] =>
    Object.keys(filterObj).filter((item: string) => !!filterObj[item]);

  const checkActiveBlockchains = (label: string): boolean => {
    const activeBlockchains = urlParams.blockchains.split(',');
    return activeBlockchains.indexOf(label) !== -1;
  };

  const checkActiveTopList = (label: string): boolean => label === urlParams.limit;

  const [activeBlockchainButtons, setBlockchainButtons]: [Record<string, boolean>, Function] = useState({
    BTC: checkActiveBlockchains('BTC'),
    ETH: checkActiveBlockchains('ETH'),
    XRP: checkActiveBlockchains('XRP'),
    LTC: checkActiveBlockchains('LTC'),
    BCH: checkActiveBlockchains('BCH'),
    XTZ: checkActiveBlockchains('XTZ'),
    ADA: checkActiveBlockchains('ADA'),
    EOS: checkActiveBlockchains('EOS'),
    XLM: checkActiveBlockchains('XLM')
  });

  const [activePeriodTimeButtons, setPeriodTimeButtons]: [Record<string, boolean>, Function] = useState({
    'By hour': false,
    'By 10 minutes': false,
    'By minutes': true
  });

  const [activeTopListButtons, setTopListButtons]: [Record<string, boolean>, Function] = useState({
    10: checkActiveTopList('10'),
    100: checkActiveTopList('100')
  });

  const [filters, setFilters]: [FiltersProps, Function] = useState({});

  const classes = useFiltersStyles();

  const alert = (): void => {
    enqueueSnackbar('At least one blockchain required', {
      variant: 'info',
      persist: false
    });
  };

  const blockchainFilterHandler = (buttonLabel: string): void => {
    const active = activeFilters(activeBlockchainButtons);
    if (active.length === 1 && active.includes(buttonLabel)) {
      alert();
      return;
    }
    if (buttonLabel === 'ETH' || buttonLabel === 'XTZ') {
      const buttons = { ...activeBlockchainButtons };
      buttons[buttonLabel] = !buttons[buttonLabel];
      setBlockchainButtons({ ...buttons });
    }
  };

  const zoomTopListHandler = (buttonLabel: string): void => {
    const buttons = { ...activeTopListButtons };
    /* eslint no-return-assign: "error" */
    Object.keys(buttons).map((label: string) => (buttons[label] = false));
    buttons[buttonLabel] = true;
    setTopListButtons({ ...buttons });
  };

  const timePeriodHandler = (buttonLabel: string): void => {
    const buttons = { ...activePeriodTimeButtons };
    /* eslint no-return-assign: "error" */
    Object.keys(buttons).map((label: string) => (buttons[label] = false));
    buttons[buttonLabel] = true;
    setPeriodTimeButtons({ ...buttons });
  };

  const filterHandler = (buttonLabel: string, filterType: Record<string, boolean>): void => {
    if (filterType === activeBlockchainButtons) {
      return blockchainFilterHandler(buttonLabel);
    }
    if (filterType === activeTopListButtons) {
      return zoomTopListHandler(buttonLabel);
    }
    return timePeriodHandler(buttonLabel);
  };

  const renderButtons = (buttonLabels: Record<string, boolean>): JSX.Element[] =>
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

  const setZoomFilter = (): number[] => [match.params.from, match.params.to];

  const setActiveFilters = (): FiltersProps => {
    const activeBlockchain = activeFilters(activeBlockchainButtons);
    const activeTopList = activeFilters(activeTopListButtons);
    const activeTimePeriod = activeFilters(activePeriodTimeButtons);
    const dates: number[] = setZoomFilter();
    const translatedActiveTimePeriod = translateTimePeriod(activeTimePeriod);

    return {
      limit: Number(activeTopList[0]),
      type: activeBlockchain,
      from: dates[0],
      to: dates[1],
      timeStep: translatedActiveTimePeriod
    };
  };

  const fetchNewData = (activeBlockchains: string[], activeFiltersDetail: FiltersProps): void =>
    activeBlockchains.forEach((blockchain: string) =>
      actions.fetchWalletsByBlockchain(
        {
          limit: activeFiltersDetail.limit,
          from: activeFiltersDetail.from,
          to: activeFiltersDetail.to,
          groupBy: urlParams.groupBy
        },
        blockchain
      ));

  const handleRefresh = (): void => {
    const acFilrDs = setActiveFilters();
    const activeBlockchains = acFilrDs.type || ['ETH', 'XTZ'];

    setFilters({ ...acFilrDs });
    fetchNewData(activeBlockchains, acFilrDs);
    props.history.push(
      `/${match.params.groupBy}/${activeBlockchains}/${acFilrDs.limit}/${acFilrDs.from}/${acFilrDs.to}`
    );
  };

  useEffect((): void => handleRefresh(), [activeBlockchainButtons, activeTopListButtons, activePeriodTimeButtons]);

  return (
    <Grid container justify="flex-start" alignItems="flex-start" className="Container">
      <Grid item xs={3}>
        <Typography variant="h3">Blockchain</Typography>
        <div className={classes.mainContainer}>{renderButtons(activeBlockchainButtons)}</div>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h3">Watch List</Typography>
        <WatchListFilter />
      </Grid>
      <Grid item xs={3} className={!showWatchedOnly ? classes.disabled : ''}>
        <Typography variant="h3">24 history</Typography>
        <Grid
          container
          justify="flex-start"
          alignItems="flex-start"
          className={!showWatchedOnly ? classes.noClick : ''}
        >
          <Grid item xs={12}>
            {renderButtons(activePeriodTimeButtons)}
          </Grid>
          <TimePeriodFilter activeTimeStep={filters.timeStep} actions={actions} urlParams={urlParams} history={props.history}/>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h3">Top list</Typography>
        {renderButtons(activeTopListButtons)}
      </Grid>
    </Grid>
  );
};

export default withRouter(Filters);
