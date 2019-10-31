import { makeStyles, createStyles, fade } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

export const useModalStyles = makeStyles((theme: ExtendedTheme) => ({
  modal: {
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    width: '316px',
    background: theme.palette.background.default,
    padding: '0 40px',
    borderRadius: '10px',
    '&:focus': {
      outline: '0px solid transparent'
    }
  },
  grey: {
    color: theme.palette.grey[400]
  },
  cursor: {
    cursor: 'pointer'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  info: {
    justifyContent: 'center',
    color: theme.palette.error.main
  },
  buttons: {
    margin: '15px 0 50px 0',
    flexDirection: 'column',
    '& button': {
      width: '100%',
      height: '40px',
      margin: '5px 0',
      borderRadius: '4px',
      '&:first-child': {
        background: 'linear-gradient(90deg, #78CC33 4.76%, #9EE32D 100%)'
      },
      '&:last-child': {
        marginBottom: '0',
        border: '1px solid #5699F6',
        background: '#253152'
      }
    }
  },
  img: {
    width: '76.08px',
    height: '76.08px',
    margin: '0 auto'
  },
  marginTop40: {
    margin: '40px 0 0 0'
  },
  marginTop28: {
    margin: '28px 0 0 0'
  },
  marginLeftAuto: {
    margin: '0 0 0 auto'
  },
  margin: {
    margin: theme.spacing(1)
  },
  title: {
    flexDirection: 'column',
    '& h2': {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      borderBottom: 'none',
      fontWeight: 700,
      '& span': {
        background: 'linear-gradient(90deg, #5977FF 0%, #8364EE 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }
    }
  },
  form: {
    margin: '13px 0 0 0'
  },
  textField: {
    width: '100%'
  },
  font: {
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    lineHeight: theme.constants.DEFAULT_LINE_HEIGHT,
    fontSize: '0.75rem'
  },
  circle: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    margin: '0 5px 0 0',
    background: '#253152'
  },
  circleActive: {
    background: 'radial-gradient(50% 1368.05% at 50% 48.72%, #78CC33 0%, #BEE32D 100%)'
  },
  options: {
    margin: '10px 0 0'
  },
  optionsHeight: {
    height: '18px'
  }
}));

export const useInputStyles = makeStyles((theme: ExtendedTheme) =>
  createStyles({
    root: {
      fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
      fontStyle: theme.constants.DEFAULT_FONT_STYLE,
      lineHeight: theme.constants.DEFAULT_LINE_HEIGHT,
      fontSize: '0.75rem',
      color: theme.palette.secondary.main,
      border: '1px solid #253152',
      overflow: 'hidden',
      borderRadius: 2,
      backgroundColor: '#253152',
      boxShadow: 'inset 0px 4px 10px rgba(15, 25, 53, 0.5)',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#253152'
      },
      '&$focused': {
        backgroundColor: '#253152',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main
      }
    },
    focused: {}
  }));

export const useLabelStyles = makeStyles((theme: ExtendedTheme) =>
  createStyles({
    root: {
      fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
      fontStyle: theme.constants.DEFAULT_FONT_STYLE,
      lineHeight: theme.constants.DEFAULT_LINE_HEIGHT,
      fontSize: '0.75rem',
      color: theme.palette.grey[600],
      '&$focused': {
        color: theme.palette.grey[600]
      }
    },
    focused: {}
  })
);

export const loaderContainerStyles = {
  'position': 'relative',
  'padding': '0',
  'backgroundColor': '#161B32',
};
