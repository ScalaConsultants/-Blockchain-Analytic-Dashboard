import { SECONDARY_BG_COLOR } from '../../theme/constants';

export const dashboardSwitchStyles = {
  switchBase: {
    color: '#9EE32D',
    '&$checked': {
      color: '#9EE32D'
    },
    '&$checked + $track': {
      background: SECONDARY_BG_COLOR
    },
  },
  checked: {},
  track: {
    background: SECONDARY_BG_COLOR
  },
}

export const walletListSwitchStyles = {
  switchBase: {
    color: '#9EE32D',
    '&$checked': {
      color: '#9EE32D'
    },
    '&$checked + $track': {
      background: SECONDARY_BG_COLOR
    },
  },
  checked: {},
  track: {},
}
