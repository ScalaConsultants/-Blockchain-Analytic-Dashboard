import {Wallet} from '../../../types';

export interface SetWalletsActionReducer {
    type: string,
    wallets: Wallet []
}
