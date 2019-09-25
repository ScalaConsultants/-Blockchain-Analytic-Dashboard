import React from 'react';
import { useMappedState } from 'redux-react-hook';

import DashboardContainer from './Dashboard-container';
import { State } from "../../types";

const DashboardRedux = () => {
    const mapState = (state: State): any => ({
        tezos: state.tezos.blocks,
        ethereum: state.ethereum.blocks
    });

    const { ethereum, tezos } = useMappedState(mapState);

    return (
        <DashboardContainer tezos={tezos} ethereum={ethereum} />
    )
}

export default DashboardRedux;
