import React, { useEffect } from 'react';
import EditWalletModalView from './EditWalletModal-view';
import { ContainerProps } from './types';

const EditWalletModal = ({ id, address, type, title, description, blockchain, update, email, canEdit }: ContainerProps) => {
  const [open, setOpen] = React.useState(false);
  const [titleState, setTitleState] = React.useState(title);
  const [descriptionState, setDescriptionState] = React.useState(description);
  const [typeState, setTypeState] = React.useState(type);

  useEffect((): void => {
    setDescriptionState(description);
    setTitleState(title);
    setTypeState(type);
  }, [type, description, title]);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    setDescriptionState(description);
    setTitleState(title);
    setTypeState(type);
  };

  const handleUpdate = (): void => {
    const data = {
      wallet_address: address,
      blockchain_id: blockchain,
      email_id: email,
      type: typeState,
      description: descriptionState,
      title: titleState
    };

    update(data);
    handleClose();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDescriptionState(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitleState(event.target.value);
  };

  const onChangeType = (event: any): void => {
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
      title={titleState}
      handleTitleChange={handleTitleChange}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleUpdate={handleUpdate}
      handleChange={handleChange}
      changeType={onChangeType}
      canEdit={canEdit}
    />
  );
};

export default EditWalletModal;
