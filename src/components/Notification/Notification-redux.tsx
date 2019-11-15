import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { useSnackbar } from 'notistack';
import { State } from '../BarChart/types';
import { Notifications } from './types';
import { CLEAR_NOTIFICATION } from '../../store/actions/notifications';

const NotificationRedux = () => {
  const { enqueueSnackbar } = useSnackbar();

  const mapState = (state: State): Notifications => ({
    notifications: state.notifications
  });

  const dispatch = useDispatch();

  const clearNotification = (notificationID: string, notificationType: string): void => {
    dispatch({
      type: `${CLEAR_NOTIFICATION}_${notificationType.toUpperCase()}`,
      notificationID
    });
  };

  const { notifications } = useMappedState(mapState);
  return (
    <>
      {Object.keys(notifications).map((messagesGroupLabel: string) =>
        // @ts-ignore
        notifications[messagesGroupLabel].map(msg =>
          enqueueSnackbar(msg.description, {
            variant: msg.type,
            persist: false,
            onClose: () => clearNotification(msg.id, msg.name) })
        ))}
    </>
  );
};

export default NotificationRedux;
