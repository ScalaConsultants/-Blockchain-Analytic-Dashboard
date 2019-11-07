import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

import { setDateToday, setDateYesterday } from '../helpers';
import { TimePeriodStyles, useTimeFilterStyles } from './TimePeriodFilter-styles';

const TimePeriodFilter = () => {

  const TimePeriodSlider = withStyles(TimePeriodStyles)(Slider);
  const timeFilterClasses = useTimeFilterStyles();

  const today = setDateToday();
  const yesterday = setDateYesterday();

  const setTimeFilter = () => {
    const today = new Date();
    return today.getHours() + ":" + today.getMinutes();
  }

  const [timeValue, setTimeValue] = React.useState([]);

  const handleChangeCommitted = (event: any, latestValue: any) => { };

  const handleChange = (event: any, newValue: any) => { setTimeValue(newValue) };

  return (
    <Grid container justify="flex-start" alignItems="flex-start" className={timeFilterClasses.container}>
      <Grid container className={timeFilterClasses.header}>
        <Grid item xs={2}>
          {yesterday}
        </Grid>
        <Grid item xs={8} className={timeFilterClasses.timeField}>
          {setTimeFilter()}
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
            defaultValue={0}
            step={0.01}
            min={12.00}
            max={11.59}
            onChange={handleChange}
            onChangeCommitted={handleChangeCommitted}
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
