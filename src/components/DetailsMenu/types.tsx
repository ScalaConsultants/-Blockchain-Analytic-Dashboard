export interface ViewProps {
  id: string;
  address?: string | any;
  description: string;
  type?: string | any;
  blockchain?: string;
  blockchains?: string;
  from?: string;
  groupBy?: string;
  limit?: string;
  to?: string;
  walletHash?: string;
  zoom: string;
  update: (data: string) => void ;
}
