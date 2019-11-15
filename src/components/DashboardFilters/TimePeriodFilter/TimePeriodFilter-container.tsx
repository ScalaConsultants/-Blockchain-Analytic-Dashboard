import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { setDateToday, setDateYesterday } from '../helpers';
import { useTimeFilterStyles } from './TimePeriodFilter-styles';


const TimePeriodFilter = (props: any) => {

  const timeFilterClasses = useTimeFilterStyles();

  const today = setDateToday();
  const yesterday = setDateYesterday();
  
  const [timeStep, setTimeStep] : [number, Function] = useState(60000);
  
  const setTimeNow = () =>  Number(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000);
  const convertTimestampToTime = (timestamp: number) => new Date(timestamp).toISOString().substr(0, 19).slice(11, -3);
  
  const [timeValueTo, setTimeValueTo] : [number, Function] = useState(setTimeNow());
  const [timeValueFrom, setTimeValueFrom] : [number, Function] = useState(setTimeNow() - timeStep);
  
  const setMinValue = () =>  Number(setTimeNow() - 24*60*60*1000);
  
  const setStep = (timeStepString: string[]) => {
    switch(timeStepString[0].toString()) {
      case('By hour'): 
      setTimeStep(3600000); 
      break;
      case('By 10 minutes'): 
      setTimeStep(600000);
      break;
      case('By minutes'): 
      setTimeStep(60000);
      break;
      default: 
      setTimeStep(60000); 
      break;
    }
  }
  
  const handleChangeCommitted = (event: any, latestValue: any) => { 
    //TODO: REFRESH DATA FOR DARECKI BAR CHART
  };
  
  const handleChange = (event: any, newValue: any) => { 
    setTimeValueTo(newValue);
    setTimeValueFrom(newValue - timeStep);
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
    const step = props.useTimeStep === undefined ? ['By minutes'] : props.useTimeStep ;
    setStep(step);
  }, [props.useTimeStep, timeValueTo]);


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
