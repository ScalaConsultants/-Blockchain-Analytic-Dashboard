import { makeStyles } from '@material-ui/core/styles';

export const transactionsDetailsModalStyle = makeStyles(theme => ({
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h2': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  },
  dialogAction: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3)
  }
}));

export const transactionsListTableStyle = makeStyles( () => ({
  thead: {
    display: 'block'
  }, 

  tbody: {
    display: 'block',
    height: '200px',
    overflowY: 'auto',
    overflowX: 'hidden',
    marginTop: '10px'
  },

  td: {
    width: '24vw'
  }

}));



