import React, { useState } from 'react';
import { useTheme } from '@material-ui/styles';
import { getTotalWalletsAmounts, getTotalDataValues, getSegmentsData } from './helpers';
import BarChartView from './BarChart-view';

const chartData = require('./BarChart-data.json');

const BarChartContainer = () => {
  const [activeSegment, updateActiveSegment] = useState(0);

  const onSegmentClick = (index: number) => {
    updateActiveSegment(index);
  }

  const { constants: { 
    MARKET_COLOR,
    PRIVATE_COLOR,
    DAAP_COLOR,
    FRAUD_COLOR,
    CHART_BAR_WIDTH,
    CHART_BAR_FONT_SIZE,
    DEFAULT_FONT_FAMILY,
    DEFAULT_FONT_WEIGHT,
    DEFAULT_FONT_STYLE,
    DEFAULT_LINE_HEIGHT
  }, palette: { grey, common }} = useTheme();

  const totalWalletsAmounts = getTotalWalletsAmounts('source', chartData);
  const totalDataValues = getTotalDataValues(totalWalletsAmounts);
  const segmentsData = getSegmentsData(
    totalWalletsAmounts,
    totalDataValues, 
    CHART_BAR_WIDTH,
    {
      market: MARKET_COLOR,
      private: PRIVATE_COLOR,
      daap: DAAP_COLOR,
      fraud: FRAUD_COLOR
    }
  );

  return (
    <BarChartView 
      data={segmentsData}
      onClick={onSegmentClick}
      activeSegment={activeSegment}
      colors={{ grey, common }}
      styles={{
        color: grey[400],
        fontFamily: DEFAULT_FONT_FAMILY,
        fontSize: CHART_BAR_FONT_SIZE,
        fontWeight: DEFAULT_FONT_WEIGHT,
        fontStyle: DEFAULT_FONT_STYLE,
        lineHeight: DEFAULT_LINE_HEIGHT
      }} 
    />
  )
};

export default BarChartContainer;