import { Markets, Blockchains } from '../../types';


export type Order = "asc" | "desc";
export type OrderBy = string;


export interface HeaderColsInterface {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
    sort: boolean;
}

export interface Wallet {
    wallet_address: string;
    title: string;
    blockchain: string;
    market: string;
    watched: boolean;
}