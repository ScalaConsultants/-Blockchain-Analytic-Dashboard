/*eslint-disable react-hooks/exhaustive-deps*/

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';

import BarChartView from './BarChart-view';
import { useBarChartSegmentStyles } from './BarChart-styles';
import { Accumulator, BarChartProps } from './types';
import { Wallet } from '../../types';

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
    activeSegmentZoom: true,
    shadowSegment: false
  };

  const customization = Object.keys(override).length
    ? { ...defaultCustomization, ...override }
    : { ...defaultCustomization };

  const defaultSegmentStyles: Record<string, string | number> = {
    height: '100%',
    top: 0
  };

  const walletHash = match.params.walletHash;
  const classes = useBarChartSegmentStyles();
  const lastSegmentClasses = clsx([classes.color, classes.center, classes.rest]);
  const [activeSegment, updateActiveSegment] = useState({ isActive: false, index: 0 });

  const getOuterClasses = (index: number, type: string | null = 'market'): string => {
    const { activeSegmentZoom } = customization;
    const types = ['market', 'private', 'dapp', 'fraud'];
    const num = types.findIndex((value) => value === type);
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

  const createLastSegment = (total: number) => {
    const num = Math.floor(100 - total);
    return (
      <div
        key="last-segment-label"
        className={lastSegmentClasses}
        style={{
          ...defaultSegmentStyles,
          flexGrow: 1
        }}
      >
        {`${num}%`}
      </div>
    );
  };

  //Temporary solution, when we get wallethash it should be remove
  const renderUniqueKey = (): string =>  '_' + Math.random().toString(36).substr(2, 9);

  const createSegment = (walletHash: string, percentage: number, index: number, type: string | null = null) => {
    const { groupBy, blockchains, limit, from, to } = match.params;
    return (
      <Link
        to={`/wallet/${walletSource}/${walletHash}/${groupBy}/${blockchains}/${limit}/${from}/${to}`}
        key={walletHash} style={{ width: percentage + '%' , textDecoration: 'none'}} className={getOuterClasses(index, type)}>
        <Tooltip title={percentage.toFixed(3) + '%'} placement="bottom" >
          <div className={getInnerClasses(index)}>
            {index < 10 && percentage >= 1 ?
              <div>{`${Math.floor(percentage)}%`}</div> : null}
          </div>
        </Tooltip>
      </Link>
    );
  };

  const createSegments = () => {
    return wallets.reduce(
      (acc: Accumulator, obj: Wallet, index: number) => {
        const { walletHash, percentage, type } = obj;
        acc.elements.push(createSegment(walletHash, percentage, index, type));
        // Last Segment
        acc.total < 100 && index === wallets.length - 1 && acc.elements.push(createLastSegment(acc.total));
        return {
          total: acc.total + percentage,
          elements: acc.elements,
        };
      },
      { total: 0, elements: [] }
    ).elements;
  };

  useEffect((): void => {
    updateActiveSegment({
      isActive: true,
      index: wallets.findIndex(val => val.walletHash === walletHash)
    });
  }, [walletHash, wallets]);

  useEffect(() => {
    const { groupBy, limit, from, to } = match.params;
    if (groupBy === 'buyer' || groupBy === 'seller' || groupBy === 'data') {
      actions.fetchWalletsByBlockchain(limit, from, to, groupBy, walletSource);
    }
  }, [match.params.groupBy]);

  const segments = createSegments();
  
  return <BarChartView data={segments} containerRef={segmentsContainer} isLoading={walletsIsFetching} />;
};
export default BarChartContainer;
