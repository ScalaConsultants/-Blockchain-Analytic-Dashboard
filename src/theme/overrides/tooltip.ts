import { BG_COLOR } from '../constants';

export const MuiTooltip = {
  tooltip: {
    backgroundColor: BG_COLOR,
    borderRadius: '4px',
    fontSize: '0.75rem',
    position: 'relative'  as 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      position: 'absolute' as 'absolute',
      borderLeft: '7px solid transparent',
      borderRight: '7px solid transparent',
      borderBottom: '7px solid' + BG_COLOR,
      left: 'calc(50% - 7px)',
      top: '-7px'
    }
  }
}
