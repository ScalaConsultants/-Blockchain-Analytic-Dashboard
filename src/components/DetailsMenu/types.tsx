export interface ViewProps {
  id: number,
  address: string
  description: string,
  type: string,
  blockchain: string,
  updateDescription: () => void
};