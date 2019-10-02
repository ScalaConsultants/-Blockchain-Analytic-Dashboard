import React, { useEffect, useState } from 'react';
import { lineChartContainerStyle } from './LineChart-styles';

import LineView from './Line-view';

import {
  convertTimeStampToHours,
} from './helpers';

import testData from './data';

const LineCharts = (props: any): React.ReactElement => {
  const { blokchain } = props;
  const classes = lineChartContainerStyle();


  const [labels, setLabels] = useState([
    '19-04-2019'
  ]);
  const [data, setData] = useState([10, 20, 30, 40]);

  const filterChart = (): void => {
    const labels: string[] = [];
    const elements: number[] = [];

    testData.forEach((item): void => {
      elements.push(item.totalValue);
      labels.push(convertTimeStampToHours(item.interval));

    });
    setLabels(labels);
    setData(elements);
  };

  useEffect((): void => {
    filterChart();
  }, [blokchain]);

  const chartLineData = {
    labels: labels,
    datasets: [
      {
        label: 'ETH',
        backgroundColor: 'rgba(255,99,132,0.0)',
        borderColor: 'rgba(107,94,233,0.5)',
        borderWidth: 4,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data,
        lineTension: 0,
      }
    ],
  }

  const chartLineOptions = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgb(163,167,176,0.1)'
        },
        ticks: {
          maxTicksLimit: 10,
          fontColor: 'rgb(163,167,176,0.8)', // this here
        },
      }],
      yAxes: [{
        gridLines: {
          color: 'rgb(163,167,176,0.1)'
        },
        ticks: {
          maxTicksLimit: 10,
          fontColor: 'rgb(163,167,176,0.8)',
        },
      }]
    }
  }

  return (
    <div className={classes.lineChartContainer}>
      <LineView
        data={chartLineData}
        width={100}
        options={chartLineOptions}
      />
    </div>
  );
};

export default LineCharts;
