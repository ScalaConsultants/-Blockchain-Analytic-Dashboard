import { DEFAULT_FONT_FAMILY, SECONDARY_BG_COLOR } from '../constants';

const MuiTypography = {
  h2: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: '1rem',
    color: '#fff',
    borderBottom: '1px solid #9EE32D',
    width: '14rem',
    padding: '0.5rem'
  },

  h3: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontSize: '0.85rem',
    color: '#fff',
    borderBottom: '1px solid' + SECONDARY_BG_COLOR,
    padding: '0.5rem',
    marginBottom: '0.35rem'
  }
};

export default MuiTypography;