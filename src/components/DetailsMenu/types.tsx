export interface ViewProps {
  id: string;
  address: string;
  description: string;
  type: string;
  blockchain: string;
  activeFilters: Record<string, string>;
  updateDescription: (val: string) => void;
  params?: any;
}
