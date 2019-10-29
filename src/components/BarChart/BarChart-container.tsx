import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';

import BarChartView from './BarChart-view';

import { Accumulator, BarChartProps } from './types';
import { Wallet } from '../../types';

import { useBarChartSegmentStyles } from './BarChart-styles';

const BarChartContainer = (props: BarChartProps) => {
  const {
    wallets = [],
    actions,
    status: { walletsIsFetching },
    override
  } = props;
  const { match } = override;
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
    width:
      (segmentsContainer.current && parseFloat(getComputedStyle(segmentsContainer.current).width || '2000')) || 2000
  };

  const customization = Object.keys(override).length
    ? { ...defaultCustomization, ...override }
    : { ...defaultCustomization };

  const defaultSegmentStyles: Record<string, string | number> = {
    position: 'absolute',
    height: '100%',
    top: 0
  };

  const walletHash = match.params.walletHash;

  const classes = useBarChartSegmentStyles();

  const lastSegmentClasses = clsx([classes.color, classes.center, classes.rest]);

  const [activeSegment, updateActiveSegment] = useState({ isActive: false, index: 0 });

  let segments: React.ReactElement<'div'>[] = [];

  const getStyle: any = (position: number, percentage: number) => {
    const { width, increaseSegmentSize } = customization;
    return {
      ...defaultSegmentStyles,
      left: position,
      width: (width * increaseSegmentSize * percentage) / 100
    };
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
    });
  };

  const createLastSegment = (pos: number, percentage: number) => {
    const { width, increaseSegmentSize } = customization;
    const posX = pos + (width * increaseSegmentSize * percentage) / 100;
    const num = Math.round(((width - posX) * 100) / width);

    return (
      <div
        key="last-segment-label"
        className={lastSegmentClasses}
        style={{
          ...defaultSegmentStyles,
          left: posX,
          width: width - posX
        }}
        >
        {/* TODO: assign real percentage from BE*/}
        {`${num}%`}
      </div>
    );
  };

  const createSegment = (walletHash: string, percentage: number, text: number, position: number, index: number) => {
    const { groupBy, blockchains, limit, from, to } = match.params;
    return (
      
        <Link
          to={`/wallet/${walletSource}/${walletHash}/${groupBy}/${blockchains}/${limit}/${from}/${to}`}
          key={walletHash}>
            <Tooltip title={percentage.toFixed(3) + '%'} placement="bottom" >
            <div className={getOuterClasses(index)} style={getStyle(position, percentage)}>
              <div className={getInnerClasses(index)}>
                {index < 10 && percentage >= 1 ? <div>{`${Math.floor(text)}%`}</div> : null}
              </div>
            </div>
          </Tooltip>
        </Link>
    );
  };

  useEffect((): void => {
    updateActiveSegment({
      isActive: true,
      index: wallets.findIndex(val => val.walletHash === walletHash)
    });
  }, [walletHash]);

  useEffect(() => {
    updateActiveSegment({
      isActive: true,
      index: wallets.findIndex(val => val.walletHash === walletHash)
    });
  }, [wallets]);

  useEffect(() => {
    const { groupBy, limit, from, to } = match.params;
    if (groupBy === 'buyer' || groupBy === 'seller' || groupBy === 'data') {
      actions.fetchWalletsByBlockchain(limit, from, to, groupBy, walletSource);
    }
  }, [match.params.groupBy]);

  segments = wallets.reduce(
    (acc: Accumulator, obj: Wallet, index: number) => {
      const { walletHash, percentage } = obj;
      const { position } = acc;
      const { restLabel, minPercentage, width, increaseSegmentSize } = customization;

      const percentageChanged = percentage > 40 ? percentage / 2 : percentage;

      // Render segments higher then min percentage
      if (percentageChanged > minPercentage && acc.total < 40) {
        acc.elements.push(createSegment(walletHash, percentageChanged, percentage, position, index));
        acc.elems.push({
          percentageChanged,
          position,
          total: acc.total
        });
      }

      // Last Segment
      if (restLabel && index === wallets.length - 1 && segmentsContainer.current) {
        acc.elements.push(
          createLastSegment(
            acc.elems[acc.elems.length - 1].position, 
            acc.elems[acc.elems.length - 1].percentageChanged
          )
        );
      }

      return {
        position: acc.position + (width * increaseSegmentSize * percentageChanged) / 100,
        total: acc.total + percentageChanged,
        elements: acc.elements,
        elems: acc.elems
      };
    },
    { position: 0, total: 0, elements: [], elems: [] }
  ).elements;

  return <BarChartView data={segments} containerRef={segmentsContainer} isLoading={walletsIsFetching} />;
};

export default BarChartContainer;
