import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';

import { Accumulator, BarChartProps } from './types';
import { Wallet } from '../../types';
import BarChartView from './BarChart-view';
import { useBarChartSegmentStyles } from './BarChart-styles';

const BarChartContainer = (props: BarChartProps) => {
  const { width, wallets = [], actions, match } = props;
  const walletHash = match.params.walletHash;
  const classes = useBarChartSegmentStyles();

  const [activeSegment, updateActiveSegment] = useState({ isActive: false, index: 0 });

  const getStyle: any = (acc: Accumulator, object: Wallet) => ({
    position: 'absolute',
    height: '100%',
    top: 0,
    left: acc.position,
    width: width * object.percentage / 100
  });

  const getOuterClasses = (index: number): string => {
    const num = Math.round(Math.random() * 3);
    const active = activeSegment.isActive && index < 10 && index === activeSegment.index;
    const firstSegmentInactive = activeSegment.isActive && index !== activeSegment.index && index === 0;

    return clsx({
      [classes.active]: active,
      [classes.firstInactive]: firstSegmentInactive,
      [classes.market]: num === 0,
      [classes.private]: num === 1,
      [classes.dapp]: num === 2,
      [classes.fraud]: num === 3
    });
  };

  const getInnerClasses = (index: number) => {
    const active = activeSegment.isActive && index < 10 && index === activeSegment.index;

    return clsx(classes.root, {
      [classes.shadow]: !active
    })
  }

  useEffect((): void => {
    updateActiveSegment({
      isActive: true,
      index: wallets.findIndex(val => val.walletHash === walletHash)
    })
  }, [walletHash]);

  useEffect((): void => {
    actions.fetchEthereumWallets();
  }, []);

  const data = wallets.reduce((acc: Accumulator, object: Wallet, index: number) => {
    if (object.percentage > 0.1) {
      acc.elements.push((
        <Link to={object.walletHash} key={object.walletHash}>
          <div
            className={getOuterClasses(index)}
            style={getStyle(acc, object)}
          >
            <div
              className={getInnerClasses(index)}
            >
              {(index < 10 && object.percentage >= 1) ? <div>{`${Math.floor(object.percentage)}%`}</div> : null}
            </div>
          </div>
        </Link>
      ))
    }
    return {
      position: acc.position + width * object.percentage / 100,
      elements: acc.elements
    };
  }, { position: 0, elements: [] }).elements;

  return <BarChartView data={data} />
};

export default withRouter(BarChartContainer);
