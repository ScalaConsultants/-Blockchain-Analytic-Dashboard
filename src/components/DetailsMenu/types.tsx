export interface ViewProps {
  id: string,
  address: string
  description: string,
  type: string,
  blockchain: string,
  updateDescription: (val: string) => void
}
