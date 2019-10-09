import React from 'react';
import { useBarChartContainer } from './BarChart-styles';
import { ViewProps } from './types';

const BarChartView = ({ data, containerRef }: ViewProps) => {
  const classes = useBarChartContainer();

  return (
    <div className={classes.root} ref={containerRef}>
      {data}
    </div>
  );
};

export default BarChartView;
