import { DEFAULT_BG_COLOR, PRIMARY_MAIN_COLOR } from '../constants';

export const MuiTable = {
    root: {
        background: DEFAULT_BG_COLOR,
        minWidth: '1024px'
    }
}

export const MuiTableCell = {
    body: {
        color: '#fff',
        background: PRIMARY_MAIN_COLOR,
        borderBottom: '1px solid DEFAULT_BG_COLOR'
    },

    head: {
        color: '#fff'
    }
}

