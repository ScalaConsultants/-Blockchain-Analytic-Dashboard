export const MuiOutlinedInput = {
  root: {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderStyle: 'none'
    }
  }
}

export const MuiInput = {
  underline: {
    '&:before': {
      borderBottom: 'none'
    },

    '&:hover:not(.Mui-disabled):before': {
      borderBottom: 'none'
    }
  }
}