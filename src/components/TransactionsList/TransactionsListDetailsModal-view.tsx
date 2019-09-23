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
import { transactionsDetailsModalStyle } from './TransactionsList-styles';
import { ModalDetailsProps } from "./types";

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

const DetailsModal = (modalDetailsProps: ModalDetailsProps): React.ReactElement => {
  const classes = transactionsDetailsModalStyle();

  return (
    <Dialog
      open={modalDetailsProps.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={modalDetailsProps.handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={classes.dialogTitle} onClick={modalDetailsProps.handleClose}>
        {'Transaction Details'}
        <IconButton onClick={modalDetailsProps.handleClose} color="primary">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid item xs={12} lg={12}>
          <Table>
            <TableBody>
              {tableRowGenerator(modalDetailsProps.data)}
            </TableBody>
          </Table>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.dialogAction} >
        <Button onClick={modalDetailsProps.handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailsModal;
