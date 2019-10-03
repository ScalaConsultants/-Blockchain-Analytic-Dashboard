import React, { useEffect, useState } from 'react';
import { lineChartContainerStyle, chartLineOptions, chartLineData } from './LineChart-styles';

import LineView from './Line-view';
import { LineChartProps } from './types';
import { Transaction } from '../../types';

import { convertTimeStampToHours } from './helpers';

const LineCharts = (props: LineChartProps): React.ReactElement => {
  const { transactions = [] } = props;
  const classes = lineChartContainerStyle();

  const [labels, setLabels] = useState([
    '19-04-2019'
  ]);
  const [data, setData] = useState([10, 20, 30, 40]);

  const filterChart = (): void => {
    const labels: string[] = [];
    const elements: number[] = [];

    transactions.forEach((item: Transaction): void => {
      elements.push(item.totalValue);
      labels.push(convertTimeStampToHours(item.interval));

    });
    setLabels(labels);
    setData(elements);
  };

  useEffect((): void => {
    filterChart();
  }, [transactions]);
  

  return (
    <div className={classes.lineChartContainer}>
      <LineView
        data={chartLineData(data, labels)}
        width={100}
        options={chartLineOptions}
      />
    </div>
  );
};

export default LineCharts;
