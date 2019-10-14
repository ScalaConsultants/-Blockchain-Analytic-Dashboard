import { DEFAULT_BG_COLOR, PRIMARY_MAIN_COLOR, DEFAULT_FONT_FAMILY } from '../constants';

export const MuiFormLabel = {
    root: {
        fontFamily: DEFAULT_FONT_FAMILY,
        color: '#fff !important',
        transition: 'none !important',
        fontSize: '0.65rem',
        transform: 'translate(0px, -20px) !important'
    }
}

export const MuiInputLabel = {
    formControl: {
        display: "inline-block" as "inline-block",
        position: "static" as "static",
        width: '20%'
    }
}

export const MuiInputBase = {
    root: {
        fontFamily: DEFAULT_FONT_FAMILY,
        color: '#4C5367;',
        fontSize: '0.65rem',
        background: '#253152',
        borderRadius: '4px',
        display: "inline-block" as "inline-block",
        position: "static" as "static",
        width: '45%',
        margin: '4px !important'
    },

    input: {
        padding: '6px'
    }

}

export const MuiInput = {
    underline: {
        '&:before': {
            display: "none"        
        }
    }
}

export const MuiIconButton = {
    root: {
        color: 'transparent'
    }
}

export const MuiFormControl = {
    root: {
        display: "block" as "block",
        position: "static" as "static",
        margin: '0 !important',
        width: '92%'
    }
}