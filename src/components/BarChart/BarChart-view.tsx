import React from 'react';
import BarChartSegments from './BarChartSegments-view';
import { SegmentsProps } from './types';

const BarChartView = ({ data, activeSegment, colors, onClick, styles }: SegmentsProps) => (
  <div style={{
    ...styles,
    background: '#253152',
    boxShadow: 'inset 0px 4px 10px #0F1935',
    height: '21.67px',
    borderRadius: '2px',
    position: 'relative',
  }}>
    <BarChartSegments data={data} activeSegment={activeSegment} onClick={onClick} colors={colors} />
  </div>
);

export default BarChartView;