import { makeStyles } from '@material-ui/core/styles';

const useTransactionsListTableStyles = makeStyles(() => ({
  thead: {
    display: 'block'
  },

  tbody: {
    display: 'block',
    height: '350px',
    overflowY: 'auto',
    overflowX: 'hidden',
    marginTop: '10px'
  },

  td: {
    width: '24vw'
  },

  grid: {
    position: 'relative'
  }
}));

export default useTransactionsListTableStyles;
