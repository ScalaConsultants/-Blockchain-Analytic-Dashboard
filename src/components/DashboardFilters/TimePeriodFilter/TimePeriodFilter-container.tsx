import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import { setDateToday, setDateYesterday } from '../helpers';
import { TimePeriodStyles, useTimeFilterStyles } from './TimePeriodFilter-styles';

const TimePeriodFilter = (props: any) => {

  const TimePeriodSlider = withStyles(TimePeriodStyles)(Slider);
  const timeFilterClasses = useTimeFilterStyles();

  const today = setDateToday();
  const yesterday = setDateYesterday();
  
  const [timeStep, setTimeStep] : [number, Function] = useState(0.01)

  const setStep = (timeStepString: string[] | undefined = ['By minutes']) => {
    const convertedDataToString = timeStepString[0].toString();
    switch(convertedDataToString) {
      case('By hour'): 
        setTimeStep(1); 
        break;
      case('By 10 minutes'): 
        setTimeStep(0.1);
        break;
      case('By minutes'): 
        setTimeStep(0.01);
        break;
      default: 
        setTimeStep(0.01); 
        break;
    }
  }

  const setTimeFilter = () => {
    const today = new Date();
    return today.getHours() + ":" + today.getMinutes();
  }

  const [timeValue, setTimeValue] = React.useState([setTimeFilter()]);

  const handleChangeCommitted = (event: any, latestValue: any) => { 
    setTimeValue(latestValue);
  };

  useEffect((): void => setStep(props.useTimeStep), [props.useTimeStep, timeValue]);

  return (
    <Grid container justify="flex-start" alignItems="flex-start" className={timeFilterClasses.container}>
      <Grid container className={timeFilterClasses.header}>
        <Grid item xs={2}>
          {yesterday}
        </Grid>
        <Grid item xs={8} className={timeFilterClasses.timeField}>
          {timeValue}
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
          <TimePeriodSlider
            defaultValue={24}
            step={timeStep}
            min={0}
            max={24}
            onChangeCommitted={handleChangeCommitted}
            valueLabelDisplay="on"
          />
        </Grid>
        <Grid item xs={1} className={timeFilterClasses.right}>
          4
       </Grid>
      </Grid>
    </Grid>
  )
}

export default TimePeriodFilter;
