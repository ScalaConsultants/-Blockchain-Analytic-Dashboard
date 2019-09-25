import { DEFAULT_BG_COLOR, PRIMARY_MAIN_COLOR, DEFAULT_FONT_FAMILY } from '../constants';

export const MuiTable = {
    root: {
        background: DEFAULT_BG_COLOR,
        fontFamily: DEFAULT_FONT_FAMILY,
        minWidth: '1024px'
    }
}

export const MuiTableRow = {
    root: {
        border: '0.65rem solid',
        borderColor: DEFAULT_BG_COLOR + '!important',
    },

    head: {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderColor: '#252D48 !important',
        marginBottom: '1rem'
    }
}

export const MuiTableCell = {
    body: {
        color: '#fff',
        background: PRIMARY_MAIN_COLOR,
        border: 'none',
    },

    head: {
        color: '#fff',
    }
}

export const MuiTableSortLabel = {

    root: {
        hover: {
            color: '#9EE32D',
        }
    }
}
