import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import WallletsListContainer from './WalletsList-container';

import * as actions from '../../store/actions/common/walletsList';

const WalletsListRedux = () => {
    const mapState = (state:any) => ({
        publicList: state.common.walletsList,
    });

    const { publicList} = useMappedState(mapState);

    const dispatch = useDispatch();


    const getWalletsList = () => dispatch({
        type: actions.GET_WALLETS_LIST,
    });

    const props = {
        actions: {
            getWalletsList
        },
        publicList
    }


    return <WallletsListContainer {...props} />
};

export default WalletsListRedux;
