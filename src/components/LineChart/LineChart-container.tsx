/*eslint-disable react-hooks/exhaustive-deps*/

import React, { useEffect, useState } from 'react';
import { lineChartContainerStyle, chartLineOptions, chartLineData } from './LineChart-styles';
import LineView from './Line-view';
import Loader from '../loader';

import { LineChartProps } from './types';
import { TransactionSummed } from '../../types';

import { convertTimeStampToHours } from './helpers';

const LineCharts = (props: LineChartProps): React.ReactElement => {
  const {
    actions,
    params,
    status: { transactionsSummedIsFetching },
    transactionsSummed = []
  } = props;

  const walletHash = params.walletHash;
  const walletSource = params.walletSource;

  const classes = lineChartContainerStyle();
  const [labels, setLabels] = useState([
    '19-04-2019'
  ]);
  const [data, setData] = useState([10, 20, 30, 40]);

  useEffect((): void => {
    const filterChart = (): void => {
      const labels: string[] = [];
      const elements: number[] = [];

      transactionsSummed.forEach((item: TransactionSummed): void => {
        elements.push(item.totalValue);
        labels.push(convertTimeStampToHours(item.interval));
      });
      setLabels(labels);
      setData(elements);
    };

    filterChart();
  }, [transactionsSummed]);

  useEffect((): void => {
    actions.fetchTransactionsSummed(walletSource, { walletHash:walletHash });
  }, [params.walletHash]);

  return (
    <div className={classes.lineChartContainer}>
      <LineView
        data={chartLineData(data, labels)}
        width={100}
        options={chartLineOptions}
      />
      <Loader isLoading={transactionsSummedIsFetching} fullPage={false}/>
    </div>
  );
};

export default LineCharts;
