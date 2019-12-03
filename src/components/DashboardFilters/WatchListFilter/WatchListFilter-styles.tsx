import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../../types';

const useWatchListFilterStyles = makeStyles((theme: ExtendedTheme) => ({
  mainContainer: {
    width: '80%'
  },

  container: {
    marginTop: '-10px'
  },

  paragraph: {
    color: theme.constants.GREY_TEXT_COLOR,
    fontSize: '0.8rem',
    letterSpacing: '0.8px',
    paddingTop: '5px',
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY
  },

  select: {
    marginRight: '10px',
    background: theme.constants.SECONDARY_BG_COLOR,
    borderRadius: '4px',
    minWidth: '13.2rem',
    width: '100%',
    height: '28px',
    color: '#4C5367',
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontSize: '0.8rem',
    paddingLeft: '10px',
    '& > ul': {
      padding: '0',
      background: theme.constants.SECONDARY_BG_COLOR
    },
    '& > svg': {
      color: theme.constants.GREY_TEXT_COLOR,
      width: '0.7em'
    }
  },

  button: {
    textAlign: 'right',
    paddingRight: '25px'
  },

  listItems: {
    background: `${theme.constants.SECONDARY_BG_COLOR}!important`,
    color: theme.constants.GREY_TEXT_COLOR,
    fontSize: '0.8rem',
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    '&:hover': {
      background: theme.constants.SECONDARY_BG_COLOR,
      color: '#5975FF'
    }
  },

  link: {
    textDecoration: 'none'
  },

  switchButtonItem: {
    transform: 'translateX(50%)'
  }
}));

export default useWatchListFilterStyles;
