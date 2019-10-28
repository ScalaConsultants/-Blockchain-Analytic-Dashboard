export const dashboardSwitchStyles = {
  switchBase: {
    color: 'radial-gradient(50% 1368.05% at 50% 48.72%, rgba(169, 176, 204, 0.5) 0%, rgba(116, 121, 140, 0.5) 100%)',
    '&$checked': {
      color: '#9EE32D'
    },
    '&$checked + $track': {
      background: '#253152'
    },
  },
  checked: {},
  track: {},
}

export const walletListSwitchStyles = {
  switchBase: {
    top: '3px',
    color: '#4C5367',
    '&$checked': {
      color: '#9EE32D'
    },
    '&$checked + $track': {
      background: "#253152",
      border: '1px solid #2A3450',
      boxShadow: 'inset 0px 4px 10px #0F1935'
    },
  },switchThumb:{
    width:"8px",
    height:"8px",
  },thumb:{
    width: '12px',
    height: '12px',
  },
  checked: {},
  track: {
    height: '13px',
    width: '65%',
    background: "#253152",
    border: '1px solid #2A3450',
    boxShadow: 'inset 0px 4px 10px #0F1935'
  },
}
