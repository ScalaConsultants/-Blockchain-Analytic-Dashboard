import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';

import { Accumulator, BarChartProps } from './types';
import { Wallet } from '../../types';

import BarChartView from './BarChart-view';
import { useBarChartSegmentStyles } from './BarChart-styles';

const BarChartContainer = (props: BarChartProps) => {
  const { width, wallets = [], actions } = props;

  const classes = useBarChartSegmentStyles();

  const [activeSegment] = useState(0);

  // const onClick = (index: number) => updateActiveSegment(index);

  const getStyle: any = (acc: Accumulator, object: Wallet) => ({
    position: 'absolute',
    height: '100%',
    top: 0,
    left: acc.position,
    width: width * object.percentage / 100,
  });

  const getClasses = (index: number): string => {
    const num = Math.round(Math.random() * 3);

    return clsx(classes.root, {
      [classes.active]: index < 10 && index === activeSegment,
      [classes.firstInactive]: index !== activeSegment && index === 0,
      [classes.market]: num === 0,
      [classes.private]: num === 1,
      [classes.dapp]: num === 2,
      [classes.fraud]: num === 3
    });
  };

  useEffect((): void => {
    actions.fetchEthereumWallets();
  }, []);

  const data = wallets.reduce((acc: Accumulator, object: Wallet, index: number) => {
    if (object.percentage > 0.1) {
      acc.elements.push((
        <Link to={object.walletHash} key={object.walletHash}>
          <div
            className={getClasses(index)}
            onClick={
              () => {
                actions.flushEthereumTransactions();
                actions.fetchEthereumTransactions({walletHash:object.walletHash, page: 1});
                actions.fetchEthereumTransactionsSummed({walletHash:object.walletHash});
            }}
            style={getStyle(acc, object)}>
            {(index < 10 && object.percentage >= 1) ? <div>{`${Math.floor(object.percentage)}%`}</div> : null}
          </div>
        </Link>
      ))
    }
    return {
      position: acc.position + width * object.percentage / 100,
      elements: acc.elements
    };
  }, { position: 0, elements: [] }).elements

  return <BarChartView data={data} />
};

export default BarChartContainer;