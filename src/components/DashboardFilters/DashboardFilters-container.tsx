import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
 
import useFiltersStyles from './DashboardFilters-styles';
import { FiltersProps } from './types'

const Filters = (props: any) => {
  const { actions, match } = props;

  const urlParams = match.params;

  const { enqueueSnackbar } = useSnackbar();

  const activeFilters = (filterObj: Record<string, boolean>) => Object.keys(filterObj).filter((item: string) =>  !!filterObj[item]);

  const checkActiveBlockchains = (label:string) => {
    const activeBlockchains = urlParams.blockchains.split(',');
    return activeBlockchains.indexOf(label) !== -1;
  }

  const checkActiveZoom = (label: string) => {
    const zoom = parseInt(urlParams.to) - parseInt(urlParams.from);
    return (label === '1 day' && zoom === 86400000) ? true : (label === '7 days' && zoom !== 86400000);
  };

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


  const [activeZoomButtons, setZoomButtons]: [Record<string, boolean>, Function] = useState({
    '1 day': checkActiveZoom('1 day'),
    '7 days': checkActiveZoom('7 days'),
  });

  const [activeTopListButtons, setTopListButtons]: [Record<string, boolean>, Function] = useState({
    '10': checkActiveTopList('10'),
    '100': checkActiveTopList('100'),
    '1000': checkActiveTopList('1000')
  });

  const [filters, setFilters]:[FiltersProps, Function] = useState({});

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

  const setZoomFilter = (dateFilter: string[]) => {
    const oneDay = [new Date('2019-10-14T14:00').getTime(), new Date('2019-10-15T14:00').getTime()];
    const week = [new Date('2019-10-10T14:00').getTime(), new Date('2019-10-15T14:00').getTime()]

    return dateFilter[0] === '1 day'? oneDay : week;
  }

  const handleRefresh = (isDataFetched: boolean) => {
    const activeBlockchain = activeFilters(activeBlockchainButtons);
    const activeZoom = activeFilters(activeZoomButtons);
    const activeTopList = activeFilters(activeTopListButtons);
    const dates: number[] = setZoomFilter(activeZoom); 

    newFilters = {
      limit: Number(activeTopList[0]),
      type: activeBlockchain,
      from: dates[0], 
      to: dates[1]
    }  

    setFilters({...newFilters});
    isDataFetched && fetchNewData(activeBlockchain);
  }

  const fetchNewData = (activeBlockchains: string[]) => {
    activeBlockchains.forEach((blockchain: string) => {
      actions.fetchWalletsByBlockchain({limit: filters.limit, from: filters.from, to: filters.to, groupBy: urlParams.groupBy}, blockchain);
    })
  }

  useEffect((): void => {
    handleRefresh(false);
  }, [activeBlockchainButtons, activeTopListButtons, activeZoomButtons]);

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
        <Link replace={true} to={`/${match.params.groupBy}/${filters.type}/${filters.limit}/${filters.from}/${filters.to}`}>
          <AutorenewIcon className={classes.refresh} onClick={ () => handleRefresh(true) }/>
        </Link>
      </Grid>
    </Grid>
  );
};

export default withRouter(Filters);
