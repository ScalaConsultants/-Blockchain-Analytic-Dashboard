import React, { useState } from 'react';
import { BAR_CHART_WIDTH } from '../../theme/constants';
import BarChartView from './BarChart-view';

import classes from './BarChart.module.css';

const BarChartContainer = () => {
  const wallets: any = []; //TODO: import data 

  const [activeSegment, updateActiveSegment] = useState(0);

  const onClick = (index: number) => updateActiveSegment(index);

  const getStyle: any = (acc: any, object: any) => ({
    position: 'absolute',
    height: '100%',
    top: 0,
    left: acc.position,
    width: BAR_CHART_WIDTH * object.percentage / 100,
  })

  const getClasses = (index: any): any => {
    const adjustedClasses = [classes.BarChartSegment]
    const colors = [
      'BarChartSegmentColorMarket', 
      'BarChartSegmentColorPrivate', 
      'BarChartSegmentColorDaap', 
      'BarChartSegmentColorFraud'
    ];

    if (index < 10 && index === activeSegment) {
      adjustedClasses.push(classes.BarChartSegmentActive);
    }

    if (index !== activeSegment && index === 0) {
      adjustedClasses.push(classes.BarChartSegmentFirstInactive)
    }

    adjustedClasses.push(classes[colors[Math.round(Math.random() * 3)]])

    return adjustedClasses.join(' ');
  };

  const data = wallets.reduce((acc: any, object: any, index: any) => {
    if (!(object.percentage < 0.1)) {
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
      position: acc.position + BAR_CHART_WIDTH * object.percentage / 100,
      elements: acc.elements
    };
  }, { position: 0, elements: [] }).elements

  return <BarChartView data={data} />
};

export default BarChartContainer;