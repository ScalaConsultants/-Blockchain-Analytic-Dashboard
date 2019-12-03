import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Slider from '@material-ui/core/Slider';

import useTimeFilterStyles from './TimePeriodFilter-styles';
import {
  setDateToday,
  setDateYesterday,
  setTimeNow,
  setMinValue,
  convertTimestampToTime,
  setStep,
  roundTimeTo10Minutes
} from '../helpers';
import { TimePeriodFilterProps } from '../types';

const TimePeriodFilter = (props: TimePeriodFilterProps) => {
  const timeFilterClasses: Record<
    'container' | 'right' | 'header' | 'timeField' | 'body',
    string
  > = useTimeFilterStyles();

  const today: string = setDateToday();
  const yesterday: string = setDateYesterday();

  const [timeStep, setTimeStep]: [number, Function] = useState(60000);

  const [timeValueTo, setTimeValueTo]: [number, Function] = useState(setTimeNow());
  const [timeValueFrom, setTimeValueFrom]: [number, Function] = useState(setTimeNow() - timeStep);

  const roundTime = (timestampToRound: number): number => {
    const timestamp: Date = new Date(timestampToRound);
    if (timeStep === 3600000) {
      return timestamp.setMinutes(0);
    }
    if (timeStep === 600000) {
      return roundTimeTo10Minutes(timestampToRound);
    }
    return timestampToRound;
  };

  const handleChange = (event: any, newValue: number | number[]): void => {
    const value: number = typeof newValue !== 'number' ? roundTime(newValue[0]) : roundTime(newValue);
    setTimeValueTo(value);
    setTimeValueFrom(value - timeStep);
  };

  const handleChangeCommitted = (): void => {
    const blockchains = props.urlParams.blockchains.split(',');
    blockchains.forEach((blockchain: string) =>
      props.actions.fetchWalletsByBlockchain(
        {
          limit: props.urlParams.limit,
          from: timeValueFrom,
          to: timeValueTo,
          groupBy: props.urlParams.groupBy
        },
        blockchain
      ));
  };

  const timePeriodSliderComponent = (): JSX.Element => (
    <Slider
      defaultValue={setTimeNow()}
      min={setMinValue() + timeStep}
      max={setTimeNow()}
      onChange={handleChange}
      onChangeCommitted={handleChangeCommitted}
    />
  );

  useEffect((): void => {
    const newTimeStep = setStep(props.activeTimeStep);
    setTimeStep(newTimeStep);
    setTimeValueFrom(timeValueTo - newTimeStep);
  }, [props.activeTimeStep, timeValueTo]);

  return (
    <Grid container justify="flex-start" alignItems="flex-start" className={timeFilterClasses.container}>
      <Grid container className={timeFilterClasses.header}>
        <Grid item xs={2}>
          {yesterday}
        </Grid>
        <Grid item xs={8} className={timeFilterClasses.timeField}>
          {`${convertTimestampToTime(roundTime(timeValueFrom))}-${convertTimestampToTime(roundTime(timeValueTo))}`}
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
          {timePeriodSliderComponent()}
        </Grid>
        <Grid item xs={1} className={timeFilterClasses.right}>
          4
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TimePeriodFilter;
