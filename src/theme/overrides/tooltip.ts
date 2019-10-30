import { SECONDARY_BG_COLOR } from '../constants';

export const MuiTooltip = {
  tooltip: {
    backgroundColor: SECONDARY_BG_COLOR,
    borderRadius: '4px',
    fontSize: '0.55rem',
    position: 'relative'  as 'relative',
    top: '-7px',
    '&:before': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      position: 'absolute' as 'absolute',
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderBottom: '6px solid ' + SECONDARY_BG_COLOR,
      left: 'calc(50% - 6px)',
      top: '-6px'
    }
  }
}
