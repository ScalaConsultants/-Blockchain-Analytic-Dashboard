import React from 'react';
import { ViewProps } from './types';

import classes from './BarChart.module.css';

const BarChartView = ({ data }: ViewProps) => (
  <div className={classes.BarChartContainer}>
    {data}
  </div>
);

export default BarChartView;