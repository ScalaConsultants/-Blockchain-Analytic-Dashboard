import { SECONDARY_BG_COLOR } from '../../theme/constants';

export const dashboardSwitchStyles = {
  switchBase: {
    color: 'radial-gradient(50% 1368.05% at 50% 48.72%, rgba(169, 176, 204, 0.5) 0%, rgba(116, 121, 140, 0.5) 100%)',
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
  },switchThumb:{
    width: 8,
    height: 8,
  },thumb:{
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
