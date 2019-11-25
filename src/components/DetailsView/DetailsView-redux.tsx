import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { withRouter } from 'react-router-dom';

import DetailsViewContainer from './DetailsView-container';

import * as actions from '../../store/actions/common/editWallet';
import { DetailsViewReduxProps, State } from './types';

const DetailsViewRedux = (props: DetailsViewReduxProps) => {
    const mapState = (state: State) => ({
        ETH: state.ethereum.wallets,
        XTZ: state.tezos.wallets,
        email: state.auth.email
    });

    const { ETH, XTZ, email } = useMappedState(mapState);

    const dispatch = useDispatch();

    const update = (data: string | undefined = '') => dispatch(actions.editWallet(data));

    const toProps = {
        ...props.match.params,
        wallets: { ETH, XTZ },
        update,
        email
    };

    return <DetailsViewContainer {...toProps} />
};

export default withRouter(DetailsViewRedux);
