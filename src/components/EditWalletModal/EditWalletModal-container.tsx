import React, { useEffect } from 'react';
import EditWalletModalView from './EditWalletModal-view';
import { ContainerProps } from './types';

const EditWalletModal = ({ id, address, type, description, blockchain, update, email }: ContainerProps) => {
  const [open, setOpen] = React.useState(false);
  const [descriptionState, setDescriptionState] = React.useState(description);
  const [typeState, setTypeState] = React.useState(type);

  useEffect(() => {
    setDescriptionState(description);
    setTypeState(type);
  }, [type, description]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDescriptionState(description);
    setTypeState(type);
  };

  const handleUpdate = () => {
    const data = {
      wallet_address: address,
      blockchain_id: blockchain,
      email_id: email,
      type: typeState,
      description: descriptionState
    };

    update(data);
    handleClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionState(event.target.value);
  };

  const onChangeType = (event: any) => {
    event.persist();
    const name = event.target.dataset.name;
    setTypeState(name);
  };

  return (
    <EditWalletModalView
      open={open}
      id={id}
      address={address}
      type={typeState}
      description={descriptionState}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleUpdate={handleUpdate}
      handleChange={handleChange}
      changeType={onChangeType}
    />
  );
};

export default EditWalletModal;
