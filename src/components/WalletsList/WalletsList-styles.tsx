import { makeStyles } from '@material-ui/core/styles';
import { ExtendedTheme } from '../../types';

const useWalletsListTableStyles = makeStyles((theme: ExtendedTheme) => ({
  thead: {
    display: 'block'
  },

  tbody: {
    display: 'block',
    height: '800px',
    overflowY: 'auto',
    overflowX: 'hidden',
    marginTop: '10px'
  },

  td: {
    width: '24vw'
  },

  grid: {
    position: 'relative'
  },
  rowEl: {
    color: '#A3A7B0',
    fontWeight: 'bold'
  }, 
  walletTypeIcon: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginRight: '10px'
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
  },
  verticalAlign: {
    display: 'flex',
    alignItems: 'center'
  },
  underline: {
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, #78CC33 0%, #9EE32D 100%)'
  },
  btnDisabled: {
    color: '#A3A7B0'
  }
}));

export default useWalletsListTableStyles;
