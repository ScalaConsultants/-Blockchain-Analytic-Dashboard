import React from 'react';
import { useBarChartContainer } from './BarChart-styles';
import { ViewProps } from './types';
import Loader from '../loader';

const BarChartView = ({ data, containerRef, isLoading }: ViewProps) => {
  const classes = useBarChartContainer();

  return (
    <div className={classes.root} ref={containerRef}>
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
