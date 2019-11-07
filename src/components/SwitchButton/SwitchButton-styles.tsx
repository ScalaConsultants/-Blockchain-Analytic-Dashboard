import { SECONDARY_BG_COLOR } from '../../theme/constants';

export const dashboardSwitchStyles = {
  switchBase: {
    top: 3,
    color: '#9EE32D',
    '&$checked': {
      color: '#9EE32D'
    },
    '&$checked + $track': {
      background: SECONDARY_BG_COLOR
    },
  },
  thumb:{
    width: 12,
    height: 12,
  },
  checked: {},
  track: {
    height: 13,
    width: '65%',
    background: SECONDARY_BG_COLOR
  },
}

export const walletListSwitchStyles = {
  switchBase: {
    top: 3,
    color: '#4C5367',
    '&$checked': {
      color: '#9EE32D'
    },
    '&$checked + $track': {
      border: '1px solid #2A3450',
      boxShadow: 'inset 0px 4px 10px #0F1935',
      background: SECONDARY_BG_COLOR
    },
  },
  thumb:{
    width: 12,
    height: 12,
  },
  checked: {},
  track: {
    height: 13,
    width: '65%',
    background: SECONDARY_BG_COLOR,
    border: '1px solid #2A3450',
    boxShadow: 'inset 0px 4px 10px #0F1935'
  },
}
