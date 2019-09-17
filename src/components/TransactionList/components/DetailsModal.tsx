import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Grid from '@material-ui/core/Grid/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import { TransitionProps } from '@material-ui/core/transitions';
import { makeStyles } from '@material-ui/core/styles';

const modalStyles = makeStyles(theme => ({
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

/* eslint-disable function-paren-newline */
const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) =>
  <Slide direction="up" ref={ref} {...props} />
);

const tableRowGenerator = (data: any) => (
  Object.keys(data).map(item => (
    <TableRow key={item}>
      <TableCell>{item}</TableCell>
      <TableCell>{data[item]}</TableCell>
    </TableRow>
  ))
);

interface Props {
  open: boolean,
  handleClose: any,
  data: any
}

const DetailsModal = ({ open, handleClose, data }: Props): React.ReactElement => {
  const classes = modalStyles();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={classes.dialogTitle} onClick={handleClose}>
        {'Transaction Details'}
        <IconButton onClick={handleClose} color="primary">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid item xs={12} lg={12}>
          <Table>
            <TableBody>
              {tableRowGenerator(data)}
            </TableBody>
          </Table>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.dialogAction} >
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsModal;
