export type Order = "asc" | "desc";
export type OrderBy = string;

export interface HeaderColsInterface {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
    sort: boolean;
}