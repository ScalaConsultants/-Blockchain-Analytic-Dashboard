import React from 'react';
import { BarChartContainer } from './BarChart-styles';
import { ViewProps } from './types';
import Loader from '../loader';

const BarChartView = ({ data, isLoading }: ViewProps) => {
  const classes = BarChartContainer();

  return (
    <div className={classes.root}>
      {data}
      <Loader
        isLoading={isLoading}
        fullPage={false}
        loaderSize={30}
        loaderContainerClass={classes.loader}
      />
    </div>
  );
};

export default BarChartView;
