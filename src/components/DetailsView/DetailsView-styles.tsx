import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

const useDetailsMenuStyles = makeStyles((theme: ExtendedTheme) => ({
  barchart: {
    height: '21.67px'
  },
  label: {
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontSize: '0.75rem',
    lineHeight: '0.75rem',
    color: theme.palette.grey[400]
  },
  marginTop: {
    margin: '10px 0 0 0'
  }
}));

export default useDetailsMenuStyles;
