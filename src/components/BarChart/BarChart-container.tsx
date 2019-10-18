import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';

import BarChartView from './BarChart-view';

import { Accumulator, BarChartProps } from './types';
import { Wallet } from '../../types';

import { useBarChartSegmentStyles } from './BarChart-styles';

const BarChartContainer = (props: BarChartProps) => {
  const { wallets = [], actions, status: { walletsIsFetching }, override } = props;
  const {match} = override;
  const walletSource = override.walletSource || match.params.walletSource;

  const segmentsContainer: React.MutableRefObject<any> = useRef();

  const defaultCustomization = {
    maxActiveSegments: 10,
    maxInactiveSegments: 40,
    minPercentage: 0.1,
    restLabel: true,
    increaseSegmentSize: 1,
    autoSegmentSize: false,
    activeSegmentZoom: true,
    shadowSegment: true,
    width: segmentsContainer.current && parseFloat(getComputedStyle(segmentsContainer.current).width || '2000') || 2000
  };

  const customization = Object.keys(override).length ? {...defaultCustomization, ...override} : {...defaultCustomization};

  const defaultSegmentStyles: Record<string, string | number> = {
    position: 'absolute',
    height: '100%',
    top: 0,
  };

  const walletHash = match.params.walletHash;

  const classes = useBarChartSegmentStyles();

  const lastSegmentClasses = clsx([classes.color, classes.center])

  const [activeSegment, updateActiveSegment] = useState({ isActive: false, index: 0 });

  let segments: React.ReactElement<'div'>[] = [];

  const getStyle: any = (position: number, percentage: number) => {
    const { width, increaseSegmentSize } = customization;
    return {
      ...defaultSegmentStyles,
      left: position,
      width: (width * increaseSegmentSize) * percentage / 100
    }
  };

  const getOuterClasses = (index: number): string => {
    const { activeSegmentZoom } = customization;
    const num = Math.round(Math.random() * 3);
    const active = activeSegment.isActive && index < 10 && index === activeSegment.index;
    const firstSegmentInactive = activeSegment.isActive && index !== activeSegment.index && index === 0;

    return clsx({
      [classes.active]: activeSegmentZoom && active,
      [classes.firstInactive]: firstSegmentInactive,
      [classes.market]: num === 0,
      [classes.private]: num === 1,
      [classes.dapp]: num === 2,
      [classes.fraud]: num === 3
    });
  };

  const getInnerClasses = (index: number) => {
    const { shadowSegment } = customization;
    const active = activeSegment.isActive && index < 10 && index === activeSegment.index;

    return clsx(classes.color, classes.center, classes.fullSize, {
      [classes.shadow]: shadowSegment && !active
    })
  };

  const createLastSegment = (pos: number, percentage: number) => {
    const { width, increaseSegmentSize } = customization;
    const posX = pos + ((width * increaseSegmentSize) * percentage / 100);

    return (
      <div key="last-segment-label" className={lastSegmentClasses} style={{
        ...defaultSegmentStyles,
        left: posX,
        width: (width * increaseSegmentSize) - posX
      }}>
          {/* TODO: assign real percentage from BE*/}
          5%
      </div>
    )
  }

  const createSegment = (walletHash: string, percentage: number, position: number, index: number) => {
    const { groupBy, blockchains, limit, from, to } = match.params;
    return (
      <Link to={`/wallet/${walletSource}/${walletHash}/${groupBy}/${blockchains}/${limit}/${from}/${to}`} key={walletHash}>
        <div
          className={getOuterClasses(index)}
          style={getStyle(position, percentage)}
        >
          <div
            className={getInnerClasses(index)}
          >
            {(index < 10 && percentage >= 1) ? <div>{`${Math.floor(percentage)}%`}</div> : null}
          </div>
        </div>
      </Link>
    );
  }

  useEffect((): void => {
    updateActiveSegment({
      isActive: true,
      index: wallets.findIndex(val => val.walletHash === walletHash)
    })
  }, [walletHash]);

  useEffect(() => {
    updateActiveSegment({
      isActive: true,
      index: wallets.findIndex(val => val.walletHash === walletHash)
    })
  }, [wallets])

  useEffect(() => {
    const { groupBy } = match.params;
    if (groupBy === 'buyer' || groupBy === 'seller') {
      actions.fetchWalletsByBlockchain(groupBy, walletSource);
    }
  }, [match.params.groupBy])

  segments = wallets.reduce((acc: Accumulator, object: Wallet, index: number) => {
    const { walletHash, percentage } = object;
    const { position } = acc;
    const { restLabel, minPercentage, width, increaseSegmentSize } = customization;

    // Render segments higher then min percentage
    if (object.percentage > minPercentage) {
      acc.elements.push(createSegment(walletHash, percentage, position, index));

      // Last Segment
      if (restLabel && index === wallets.length - 1 && segmentsContainer.current) {  
        acc.elements.push(createLastSegment(position, percentage))
      }
    }

    return {
      position: acc.position + (width * increaseSegmentSize) * object.percentage / 100,
      elements: acc.elements
    };
  }, { position: 0, elements: [] }).elements;

  return <BarChartView data={segments} containerRef={segmentsContainer} isLoading={walletsIsFetching} />
};

export default BarChartContainer;
