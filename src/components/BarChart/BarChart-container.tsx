import React, { useState } from 'react';
import BarChartView from './BarChart-view';
import clsx from 'clsx';
import { BarChartSegment } from './BarChart-styles';
import { Wallet, Accumulator } from './types';

const BarChartContainer = (props: any) => {
  const { width, wallets = [] } = props;


  // const wallets:any = [];
  console.log('wallets', wallets);
  // let wallets2 = [
  //   {
  //     walletHash: "0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE",
  //     totalValue: 317157.40929040906,
  //     percentage: 9.537581226550394
  //   },
  //   {
  //     walletHash: "0x6cC5F688a315f3dC28A7781717a9A798a59fDA7b",
  //     totalValue: 139439.88,
  //     percentage: 4.193246453538416
  //   },
  //   {
  //     walletHash: "0xF977814e90dA44bFA03b6295A0616a897441aceC",
  //     totalValue: 99999.99999999999,
  //     percentage: 3.00720744563063
  //   }
  //  ];


  const classes = BarChartSegment();

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