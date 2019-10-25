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
  }, market: {
    width: '12px',
    height: '12px',
    background: theme.constants.MARKET_COLOR,
    borderRadius: '50%',
    marginRight: '10px'
  },
  rest: {
    width: '12px',
    height: '12px',
    background: theme.constants.REST_COLOR,
    borderRadius: '50%',
    marginRight: '10px'
  },
  private: {
    width: '12px',
    height: '12px',
    background: theme.constants.PRIVATE_COLOR,
    borderRadius: '50%',
    marginRight: '10px'
  }, dapp: {
    width: '12px',
    height: '12px',
    background: theme.constants.DAPP_COLOR,
    borderRadius: '50%',
    marginRight: '10px'
  }, fraud: {
    width: '12px',
    height: '12px',
    background: theme.constants.FRAUD_COLOR,
    borderRadius: '50%',
    marginRight: '10px'
  }
}));

export default useWalletsListTableStyles;
