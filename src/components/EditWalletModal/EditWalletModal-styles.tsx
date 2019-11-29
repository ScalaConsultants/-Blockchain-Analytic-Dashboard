import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

const EditWalletModalStyles = makeStyles((theme: ExtendedTheme) => ({
  modal: {
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    width: '467px',
    background: theme.palette.background.default,
    padding: '0px 20px 21px',
    borderRadius: '10px',
    '&:focus': {
      outline: '0px solid transparent'
    }
  },
  background: {
    background: theme.constants.SECONDARY_BG_COLOR
  },
  chip: {
    padding: '4px 6px',
    borderRadius: '4px',
    marginRight: '15px',
    marginTop: '15px'
  },
  description: {
    border: '1px solid #569AF5',
    borderRadius: '5px',
    boxShadow: 'inset 0px 4px 10px rgba(15, 25, 53, 0.5)',
    marginTop: '4px',
    '& div': {
      padding: '6px 9px'
    }
  },
  textarea: {
    minHeight: '44px'
  },
  button: {
    width: '100px',
    height: '26px',
    border: '1px solid #5699F6',
    borderRadius: '4px',
    textTransform: 'none'
  },
  buttonFirst: {
    background: theme.constants.DECOR_COLOR,
    border: 'none'
  },
  close: {
    marginLeft: 'auto'
  },
  fonts: {
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
    fontSize: '0.75rem',
    lineHeight: '0.75rem'
  },
  marginTop30: {
    marginTop: '30px'
  },
  marginTop15: {
    marginTop: '15px'
  },
  white: {
    color: theme.palette.common.white
  },
  grey: {
    color: theme.palette.grey[400]
  },
  market: {
    background: theme.constants.MARKET_COLOR
  },
  private: {
    background: theme.constants.PRIVATE_COLOR
  },
  dapp: {
    background: theme.constants.DAPP_COLOR
  },
  fraud: {
    background: theme.constants.FRAUD_COLOR
  },
  editButton: {
    height: '28px',
    textTransform: 'none',
    borderRadius: '4px',
    border: 'none'
  },
  disableBtn: {
    cursor: 'not-allowed',
    backgroundColor: 'rgba(255, 255, 255, 0.08)'
  }
}));

export default EditWalletModalStyles;
