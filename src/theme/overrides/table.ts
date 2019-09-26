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
    }
}

export const MuiTableHead = {
    root: {
        borderBottom: '4px solid #252D48'
    }
}

export const MuiTableCell = {
    body: {
        color: '#fff',
        background: PRIMARY_MAIN_COLOR,
        border: 'none',
        fontSize: '0.75rem',
        fontFamily: DEFAULT_FONT_FAMILY,

        '&:first-child': {
            borderRadius: '25px 0 0 25px'
        },

        '&:last-child': {
            borderRadius: '0 25px 25px 0'
        }
    },

    head: {
        color: '#fff'
    }
}

export const MuiTableSortLabel = {
    root: {
        fontFamily: DEFAULT_FONT_FAMILY,
        '&:hover': {
            color: '#9EE32D',
        }
    },

    icon: {
        fill: '#9EE32D',
    }
}
