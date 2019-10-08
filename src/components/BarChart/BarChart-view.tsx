import React from 'react';
import { BarChartContainer } from './BarChart-styles';
import { ViewProps } from './types';

const BarChartView = ({ data }: ViewProps) => {
  const classes = BarChartContainer();

  return (
    <div className={classes.root}>
      {data}
    </div>
  );
};

export default BarChartView;
