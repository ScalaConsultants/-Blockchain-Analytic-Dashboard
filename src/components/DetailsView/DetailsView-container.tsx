import React, { useEffect } from 'react';
import DetailsViewView from './DetailsView-view';
import { DetailsViewProps } from './types';

const DetailsViewContainer = (props: DetailsViewProps) => {

    const { actions, routeProps } = props;
    const walletHash = routeProps.match.params.wallet_hash;

    const checkWalletHashAndFetchTransactions = () => {
        if (walletHash) {
            actions.fetchEthereumTransactions(walletHash);
        }
    }

    useEffect((): void => {
        checkWalletHashAndFetchTransactions();
    }, []);

    return <DetailsViewView />;

}
export default DetailsViewContainer;