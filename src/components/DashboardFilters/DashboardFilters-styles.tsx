import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

 export const useFiltersStyles: any = makeStyles((theme: ExtendedTheme) => ({
  
  button: {
    color: '#A3A7B0',
    background: '#253152',
    borderRadius: '4px',
    borderColor: '#253152',
    minWidth: '38px',
    height: '23px',
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
    fontSize: '0.65rem',
    lineHeight: theme.constants.DEFAULT_LINE_HEIGHT,
    margin: '4px',

    '&:hover': useFiltersStyles.active
  },

  active: {
    color: theme.palette.common.white,
    background: 'linear-gradient(90deg, #78CC33 4.76%, #9EE32D 100%)'
  },

  refresh: {
    color: '#597CFD'
  }

}));

export default useFiltersStyles;
