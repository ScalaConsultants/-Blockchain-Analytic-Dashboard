import React from 'react';
import { useDispatch } from 'redux-react-hook';

import UserMenu from './UserMenu-container';
import authActions from '../../store/actions/auth';

const UserMenuRedux = () => {

  const dispatch = useDispatch();

  const logout = () => dispatch(authActions.authUserLogout());

  return <UserMenu logout={logout}/>
};

export default UserMenuRedux;