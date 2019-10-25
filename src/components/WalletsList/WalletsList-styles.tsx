import { makeStyles } from '@material-ui/core/styles';

const useWalletsListTableStyles = makeStyles(() => ({
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
    fontWeight:'bold'
  }
}));

export default useWalletsListTableStyles;
