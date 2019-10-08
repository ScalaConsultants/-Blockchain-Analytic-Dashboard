import { makeStyles } from '@material-ui/styles';
import { ExtendedTheme } from '../../types';

const useDetailsMenuStyles = makeStyles((theme: ExtendedTheme) => ({
  label: {
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontSize: '0.75rem',
    lineHeight: '0.75rem',
    color: theme.palette.grey[400]
  }
}));

export default useDetailsMenuStyles;
