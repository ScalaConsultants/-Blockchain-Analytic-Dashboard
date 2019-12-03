import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

import { SECONDARY_BG_COLOR } from '../../theme/constants';

const useWalletsListTableStyles = makeStyles((theme: ExtendedTheme) => ({
  rowEl: {
    color: theme.constants.GREY_TEXT_COLOR,
    fontWeight: 'bold'
  },
  walletTypeIcon: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    marginRight: 10
  },
  restColor: {
    background: theme.constants.REST_COLOR,
  },
  privateColor: {
    background: theme.constants.PRIVATE_COLOR,
  },
  dappColor: {
    background: theme.constants.DAPP_COLOR,
  },
  fraudColor: {
    background: theme.constants.FRAUD_COLOR,
  },
  marketColor: {
    background: theme.constants.MARKET_COLOR,
  },unassignedColor: {
    border: '1px solid #4C5367',
    background: 'transparent'
  },
  verticalAlign: {
    display: 'flex',
    alignItems: 'center'
  },
  underline: {
    width: '100%',
    height: 2,
    background: 'linear-gradient(90deg, #78CC33 0%, #9EE32D 100%)'
  },
  btnDisabled: {
    color: theme.constants.GREY_TEXT_COLOR,
  },
  button: {
    color: theme.constants.GREY_TEXT_COLOR,
    background: SECONDARY_BG_COLOR,
    borderRadius: 4,
    borderColor: SECONDARY_BG_COLOR,
    minWidth: 38,
    height: 23,
    fontFamily: theme.constants.DEFAULT_FONT_FAMILY,
    fontStyle: theme.constants.DEFAULT_FONT_STYLE,
    fontWeight: theme.constants.DEFAULT_FONT_WEIGHT,
    fontSize: '0.65rem',
    lineHeight: theme.constants.DEFAULT_LINE_HEIGHT,
    margin: 4,
  }, 
  labelDisabled: {
    color: '#4C5367'
  },
  headerWithSort: {
    display: 'flex', alignItems: 'center', cursor: 'pointer' 
  },
  arrowUp: {
    display: 'block', marginBottom: -12 
  },
  arrowDown: {
    display: 'block'
  },
  blockchainIcon: {
    width: 15, 
    marginRight: 5
  },
  privateWallets: { 
    marginRight: '20px', zIndex: 1000, cursor: 'pointer' 
  },
  publicWallets: {
    zIndex: 1000, cursor: 'pointer' 
  }

}));

export default useWalletsListTableStyles;
