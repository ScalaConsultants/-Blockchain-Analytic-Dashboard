import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, FormControl, InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';

import { setDateToday, setDateYesterday } from './helpers';
import { useFiltersStyles, TimePeriodStyles, useTimeFilterStyles } from './DashboardFilters-styles';
import { FiltersProps } from './types'
import SwitchButton from '../SwitchButton';
import EditWalletModal from '../EditWalletModal';



const Filters = (props: any) => {

  const TimePeriodSlider = withStyles(TimePeriodStyles)(Slider);

  const { actions, match } = props;

  const urlParams = match.params;

  const { enqueueSnackbar } = useSnackbar();

  const today = setDateToday();
  const yesterday = setDateYesterday();

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


  const timeFilterClasses = useTimeFilterStyles();

  return (
    <Grid container justify="flex-start" alignItems="flex-start" className="Container">
      <Grid item xs={3}>
        <Typography variant="h3">Blockchain</Typography>
        {renderButtons(activeBlockchainButtons)}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3">Watch List</Typography>
        {/* <Grid container justify="flex-start" alignItems="flex-start" className="Container">
          <Grid item xs={10}>
              Show watched only 
          </Grid>
          <Grid item xs={1}>
            <SwitchButton dashboaradSwitch={false} switchState={true} handleChange={() => console.log('switch')} />
          </Grid>
        </Grid>
        <Grid container justify="flex-start" alignItems="flex-start" className="Container">
          <Grid item xs={8}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select>
                <MenuItem value={1}>Blockchain List 1</MenuItem>
                <MenuItem value={2}>Blockchain List 2</MenuItem>
                <MenuItem value={3}>Blockchain List 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <EditWalletModal id={"1"} address={"1"} description={"1"} update={() => (console.log('e'))}/>          
          </Grid>
        </Grid> */}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3">24 history</Typography>
        <Grid container justify="flex-start" alignItems="flex-start" >
          <Grid item xs={12}>
            {renderButtons(activePeriodTimeButtons)}
          </Grid>
          <Grid container justify="flex-start" alignItems="flex-start" className={timeFilterClasses.container}>
            <Grid container className={timeFilterClasses.header}>
              <Grid item xs={2}>
                {yesterday}
              </Grid>
              <Grid item xs={8} className={timeFilterClasses.timeField}>
                Time
            </Grid>
              <Grid item xs={2} className={timeFilterClasses.right}>
                {today}
              </Grid>
            </Grid>
            <Grid container className={timeFilterClasses.body}>
              <Grid item xs={1}>
                5
              </Grid>
              <Grid item xs={10}>
                <TimePeriodSlider defaultValue={20} />
              </Grid>
              <Grid item xs={1} className={timeFilterClasses.right}>
                4
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
