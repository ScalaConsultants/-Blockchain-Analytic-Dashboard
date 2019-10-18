import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router'
import useButtonBackStyles from './ButtonBack-styles';

const ButtonBack = () => {
  const history = useHistory();
  const { back } = useButtonBackStyles();

  const customGoBack = () => history.location.key ? history.goBack() : history.push('/');

  return (
    <Button
      className={back}
      onClick={() => customGoBack()}
      startIcon={
        <ArrowBackIosIcon fontSize="inherit" />
      }
    >
      back
    </Button>
  );
};

export default ButtonBack;
