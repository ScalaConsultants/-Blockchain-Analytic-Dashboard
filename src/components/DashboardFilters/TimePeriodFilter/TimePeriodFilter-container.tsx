import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Slider from '@material-ui/core/Slider';

import { useTimeFilterStyles } from './TimePeriodFilter-styles';
import { setDateToday, setDateYesterday, setTimeNow, setMinValue, convertTimestampToTime, setStep } from '../helpers';
import { TimePeriodFilterProps } from '../types';

const TimePeriodFilter = (props: TimePeriodFilterProps) => {

  const timeFilterClasses = useTimeFilterStyles();

  const today = setDateToday();
  const yesterday = setDateYesterday();
  
  const [timeStep, setTimeStep] : [number, Function] = useState(60000);
  
  const [timeValueTo, setTimeValueTo] : [number, Function] = useState(setTimeNow());
  const [timeValueFrom, setTimeValueFrom] : [number, Function] = useState(setTimeNow() - timeStep);
  
  const handleChange = (event: any, newValue: number | number[]): void => { 
    const value: number = typeof newValue !== 'number' ? newValue[0] : newValue;
    setTimeValueTo(value);
    setTimeValueFrom(value - timeStep);
  };

  const timePeriodSliderComponent = () => 
    <Slider
      defaultValue={setTimeNow()}
      min={setMinValue() + timeStep}
      max={setTimeNow()}
      onChange={handleChange}
      // onChangeCommitted={handleChangeCommitted}
    />

  useEffect((): void => {
    const newTimeStem = setStep(props.activeTimeStep);
    setTimeStep(newTimeStem);
    setTimeValueFrom(timeValueTo - newTimeStem);
  }, [props.activeTimeStep, timeValueTo]);

  return (
    <Grid container justify="flex-start" alignItems="flex-start" className={timeFilterClasses.container}>
      <Grid container className={timeFilterClasses.header}>
        <Grid item xs={2}>
          {yesterday}
        </Grid>
        <Grid item xs={8} className={timeFilterClasses.timeField}>
          {convertTimestampToTime(timeValueFrom) + '-' + convertTimestampToTime(timeValueTo)}
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
  )
}

export default TimePeriodFilter;
