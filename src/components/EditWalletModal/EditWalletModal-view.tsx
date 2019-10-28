import React from 'react';
import clsx from 'clsx';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditWalletModalStyles from './EditWalletModal-styles';
import { ViewProps } from './types';

const EditWalletModalView = ({
                               open,
                               handleOpen,
                               handleClose,
                               handleUpdate,
                               handleChange,
                               id,
                               address,
                               description
}: ViewProps) => {
  const classes = EditWalletModalStyles();
  const classesPaper = clsx([classes.paper, classes.fonts, classes.grey]);
  const classesChip = clsx([classes.chip, classes.background]);
  const classesTextarea = clsx([classes.textarea, classes.fonts, classes.white]);
  const classesWalletType = clsx([classes.marginTop30, classes.types]);
  const classesEditWalletButton = clsx([classes.editButton, classes.fonts, classes.grey, classes.background]);
  const classesFirstButton = clsx([classes.button, classes.fonts, classes.buttonFirst, classes.white]);
  const classesSecondButton = clsx([classes.button, classes.fonts]);
  const { PUBLIC_URL } = process.env;

  return (
    <>
      <Button
        variant="outlined"
        color="inherit"
        className={classesEditWalletButton}
        onClick={handleOpen}
      ><img src={`${PUBLIC_URL}/icons/wallet.png`} style={{ width: '13px', marginRight: '5px' }} />
        edit
      </Button>
      <Modal
        aria-labelledby="edit-wallet-modal-title"
        aria-describedby="edit-wallet-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classesPaper}>
            <Grid container alignItems="center">
              <h4 id="edit-wallet-modal-title" className={classes.white}>
                  Edit Wallet
              </h4>
              <CloseIcon className={classes.close} viewBox="0 0 40 20" onClick={handleClose} />
            </Grid>
            <Divider
              /* eslint-disable-next-line react/jsx-boolean-value */
              light={true}
              className={classes.background}
            />
            <Grid container alignItems="center" className={classes.marginTop15}>
              <Grid item xs={3}>ID</Grid>
              <Grid item xs={9} className={classes.white}>{id}</Grid>
            </Grid>
            <Grid container alignItems="center" className={classes.marginTop15}>
              <Grid item xs={3}>Address</Grid>
              <Grid item xs={9} className={classes.white}>{address}</Grid>
            </Grid>
            <Grid container className={classesWalletType}>
              <Grid item xs={12}>Select wallet type:</Grid>
              <Grid item className={classesChip}>Market</Grid>
              <Grid item className={classesChip}>Private</Grid>
              <Grid item className={classesChip}>DAPP</Grid>
              <Grid item className={classesChip}>Fraud</Grid>
            </Grid>
            <Grid container className={classes.marginTop30}>
              <Grid item xs={12}>Description</Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  /* eslint-disable-next-line react/jsx-boolean-value */
                  fullWidth={true}
                  id="edit-wallet-modal-description"
                  className={classes.description}
                  defaultValue={description}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  inputProps={{ 'aria-label': 'edit-wallet-modal-description', className: classesTextarea }}
                />
              </Grid>
            </Grid>
            <Grid
              alignItems="center"
              className={classes.marginTop15}
              container
              direction="row"
              justify="center"
              spacing={2}
            >
              <Grid item>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classesFirstButton}
                  onClick={handleUpdate}
                >
                  OK
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classesSecondButton}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default EditWalletModalView;
