export interface DetailsViewProps {
  match: {
    params: {
      walletHash: string,
      walletSource: string,
      limit: string,
      groupBy: string,
      to: string,
      from: string
    }
  }
}