import React from 'react';

import DetailsView from './DetailsView-view';
import { DetailsContainerProps, Wallet } from './types';

const DetailsViewContainer = (props: DetailsContainerProps) => {
    const {
        walletSource,
        walletHash,
        from,
        to,
        wallets
    } = props;

    const blockchainMap: Record<string, string> = {
        'XTZ': 'tezos',
        'ETH': 'ethereum'
    };

    const wallet = wallets[walletSource].length && wallets[walletSource]
        .find((wallet: Wallet) => wallet.walletHash === walletHash);
    
    const id: string = walletHash && `${Math.floor(Math.random() * (30 - 1) + 1)}`;
    const days = (parseInt(to) - parseInt(from)) / (1000*60*60*24);
    const zoom = days > 1 ? '7 days' : '1 day';
    const description = wallet.description || 'This wallet belongs to market';
    const type = wallet.type || 'market';
    const blockchain = blockchainMap[walletSource];

    const toProps = {
        ...props,
        id,
        zoom,
        description,
        type,
        blockchain
    };

    return <DetailsView {...toProps} />;
};

export default DetailsViewContainer;