import { SvgIconProps } from "@material-ui/core/SvgIcon";

export interface Config {
  chartType: string;
  label: string;
  title: string;
}

/* eslint-disable camelcase */
export interface Block {
  source: string;
  timestamp: number;
  block_leve: number;
  amount: number;
  counter: number;
  destination: string;
  fee: number;
}

export interface SummedBlock extends Block {
  transactions: number;
}

export interface Blockchain {
  blokchain: Block[];
}

export interface State {
  tezos: {
    blocks: Block[];
    summedBlocks: any[];
  };
  ethereum: {
    blocks: Block[];
    summedBlocks: any[];
    page: number;
  };
  loader: number;
  dataSource: string;
}

export interface EventTarget {
  target: {
    value: string;
  };
}

export interface DatePickerProps {
  label: string;
  date: Date | null;
  handleDateChange: (date: Date | null) => void;
}

export interface ActionType {
  type: string;
}

export interface FetchTransactionsAction extends ActionType {
  transactions: Block[];
}

export interface DataSourceActionType extends ActionType {
  type: string;
  source: string;
}

export interface MenuItemType {
  name: string,
  route: string,
  icon?: React.ReactElement<SvgIconProps>,
  description?: string | undefined
}
