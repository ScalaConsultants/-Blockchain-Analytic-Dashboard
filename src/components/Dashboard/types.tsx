import { Block } from '../../types';

export interface DashboardProps {
    tezos: Block[],
    ethereum: Block[]
}

export interface Item {
    key: number,
    value: string
}

export interface ChartData {
    name: string;
    value: number;
}

export interface ChartProps {
    data: ChartData[];
    width?: number;
    height?: number;
    spaceBetweenBars?: number;
    barHeight?: number;
    barColor?: string;
    selectedBarColor?: string;
}