import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';

import DetailsViewContainer from './DetailsView-container';

import * as actions from '../../store/actions/common/editWallet';

const DetailsViewRedux = (props: any) => {
    const mapState = (state: any) => ({
        ETH: state.ethereum.wallets,
        XTZ: state.tezos.wallets
    });

    const wallets = useMappedState(mapState);

    const dispatch = useDispatch();

    const update = (data: any) => dispatch(actions.editWallet(data));

    const toProps = {
        ...props.match.params,
        wallets,
        update
    };

    return <DetailsViewContainer {...toProps} />
};

export default withRouter(DetailsViewRedux);
