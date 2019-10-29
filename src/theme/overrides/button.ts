import { DEFAULT_FONT_FAMILY, DEFAULT_FONT_STYLE, SECONDARY_BG_COLOR} from '../constants';

const MuiButton = {
  root: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontStyle: DEFAULT_FONT_STYLE,
    fontWeight: 900,
    fontSize: '0.75rem',
    lineHeight: '0.75rem',
    background: SECONDARY_BG_COLOR,
    height: '28px',
    borderRadius: '4px',
    border: 'none'
  },
  label: {
    height: '16px'
  },
  iconSizeMedium: {
    '& > *:first-child': {
      fontSize: '10px'
    }
  }
};

export default MuiButton;