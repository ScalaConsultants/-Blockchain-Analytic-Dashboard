import { BG_COLOR } from '../../theme/constants';

export const dashboardSwitchStyles = {
  switchBase: {
    color: '#9EE32D',
    '&$checked': {
      color: '#9EE32D'
    },
    '&$checked + $track': {
      background: BG_COLOR
    },
  },
  checked: {},
  track: {},
}

export const walletListSwitchStyles = {
  switchBase: {
    color: '#9EE32D',
    '&$checked': {
      color: '#9EE32D'
    },
    '&$checked + $track': {
      background: BG_COLOR
    },
  },
  checked: {},
  track: {},
}
