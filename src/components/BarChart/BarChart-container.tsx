import React, { useState } from 'react';
import BarChartView from './BarChart-view';
import clsx from 'clsx';
import { BarChartSegment } from './BarChart-styles';
import { Wallet, Accumulator } from './types';

const BarChartContainer = ({ width = 2000 }) => {
  const wallets: Wallet[] = []; //TODO: import data 

  const [activeSegment, updateActiveSegment] = useState(0);

  const onClick = (index: number) => updateActiveSegment(index);

  const getStyle: any = (acc: Accumulator, object: Wallet) => ({
    position: 'absolute',
    height: '100%',
    top: 0,
    left: acc.position,
    width: width * object.percentage / 100,
  })

  const getClasses = (index: number): string => {
    const classes = BarChartSegment();
    const num = Math.round(Math.random() * 3);

    return clsx(classes.root, {
      [classes.active]: index < 10 && index === activeSegment,
      [classes.firstInactive]: index !== activeSegment && index === 0,
      [classes.market]: num === 0,
      [classes.private]: num === 1,
      [classes.daap]: num === 2,
      [classes.fraud]: num === 3
    });
  };

  const data = wallets.reduce((acc: Accumulator, object: Wallet, index: number) => {
    if (object.percentage > 0.1) {
      acc.elements.push((
        <div
          className={getClasses(index)}
          onClick={() => onClick(index)}
          key={object.walletHash} 
          style={getStyle(acc, object)}>
          {(index < 10 && object.percentage >= 1) ? <div>{`${Math.floor(object.percentage)}%`}</div> : null}
        </div>
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