import React from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import WallletsListContainer from './WalletsList-container';

import * as actions from '../../store/actions/common/walletsList';

const WalletsListRedux = () => {
    const mapState = (state: any) => ({
        publicList: state.common.walletsList.setWalletsList,
        userList: state.common.walletsList.setWalletsListUser
    });

    const { publicList, userList } = useMappedState(mapState);

    const dispatch = useDispatch();


    const getWalletsList = () => dispatch({
        type: actions.GET_WALLETS_LIST,
    });

    const getWalletsListUser = () => dispatch({
        type: actions.GET_WALLETS_LIST_USER,
    });

    const editWalletsList = (data: any) => dispatch({
        type: actions.EDIT_WALLETS_LIST,
        data
    });

    const editWalletsListUser = (data: any) => dispatch({
        type: actions.EDIT_WALLETS_LIST_USER,
        data
    });

    const props = {
        actions: {
            getWalletsList,
            getWalletsListUser,
            editWalletsListUser,
            editWalletsList
        },
        publicList,
        userList
    }


    return <WallletsListContainer {...props} />
};

export default WalletsListRedux;
