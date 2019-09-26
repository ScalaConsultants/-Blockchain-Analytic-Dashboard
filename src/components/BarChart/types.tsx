export interface ChartData {
  name: string;
  value: number;
}

export interface Props {
  data: ChartData[];
  width?: number;
  height?: number;
  spaceBetweenBars?: number;
  barHeight?: number;
  barColor?: string;
  selectedBarColor?: string;
}

export interface SegmentsProps {
  data: [];
  activeSegment: number;
  styles: object;
  segmentStyles: object;
  onClick: any;
}