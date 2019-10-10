import { makeStyles } from '@material-ui/styles';
import { ExtendedTheme } from '../../types';

const DetailsMenuStyles = makeStyles((theme: ExtendedTheme) => ({
  root: {
    marginBottom: '15px'
  },
  back: {
    textTransform: 'none',
    color: theme.palette.grey[400]
  },
  fonts: {
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontSize: '0.75rem',
    lineHeight: '0.75rem'
  },
  fontWeightBold: {
    fontWeight: theme.constants.DEFAULT_FONT_WEIGHT
  },
  fontWeightNormal: {
    fontWeight: 'normal'
  },
  white: {
    color: theme.palette.common.white
  },
  grey: {
    color: theme.palette.grey[400]
  },
  margin: {
    marginTop: '20px',
    marginBottom: '5px'
  }
}));

export default DetailsMenuStyles;
