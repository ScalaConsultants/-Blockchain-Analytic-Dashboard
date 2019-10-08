import React from 'react';
import EditWalletModalView from './EditWalletModal-view';
import { ContainerProps } from './types';

const EditWalletModal = ({ id, address, description, update }: ContainerProps) => {
  const [open, setOpen] = React.useState(false);
  const [descriptionState, setDescriptionState] = React.useState(description);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDescriptionState(description);
  };

  const handleUpdate = () => {
    // update store
    update(descriptionState);
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionState(event.target.value);
  };

  return (
    <EditWalletModalView
      open={open}
      id={id}
      address={address}
      description={descriptionState}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleUpdate={handleUpdate}
      handleChange={handleChange}
    />
  );
};

export default EditWalletModal;
