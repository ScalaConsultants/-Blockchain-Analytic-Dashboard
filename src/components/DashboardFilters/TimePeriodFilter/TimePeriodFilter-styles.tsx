import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../../types';

const useTimeFilterStyles = makeStyles((theme: ExtendedTheme) => ({
  container: {
    border: `1px solid${theme.constants.SECONDARY_BG_COLOR}`,
    maxWidth: '230px',
    margin: '10px 4px',
    borderRadius: '4px'
  },

  header: {
    background: theme.constants.SECONDARY_BG_COLOR,
    fontSize: '0.7rem',
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    color: theme.constants.GREY_TEXT_COLOR,
    padding: '5px 9px'
  },

  right: {
    textAlign: 'right'
  },

  timeField: {
    fontSize: '0.8rem',
    textAlign: 'center'
  },

  body: {
    padding: '5px 9px',
    fontSize: '0.7rem',
    color: '#5975FF'
  }
}));

export default useTimeFilterStyles;
