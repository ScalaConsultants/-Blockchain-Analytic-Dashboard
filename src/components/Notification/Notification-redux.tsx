import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import NotificationContainer from './Notification-container';
import { State } from "../BarChart/types";
import { Notifications, NotificationTypes, NotificationMessage, testWTF } from "./types";
import { useSnackbar } from 'notistack';
import { CLEAR_NOTIFICATION } from '../../store/actions/notifications';
import Button from "@material-ui/core/Button";
import * as walletActions from "../../store/actions/ethereum/wallets";



// const test123 = (notifications: NotificationTypes) => {
//   return Object.keys(notifications).map((messagesGroupLabel: string) => {
//     // @ts-ignore
//     const group = notifications[messagesGroupLabel];
//
//     return group.map((message: NotificationMessage) => {
//       return (
//         <NotificationContainer description={message.description} type={message.type}/>
//       )
//     });
//   });
// };


// const getNotificationGroup = (notifications: NotificationTypes) => {
//   return Object.keys(notifications).map((messagesGroupLabel: string) => {
//     // @ts-ignore
//     const group = notifications[messagesGroupLabel];
//     console.log("STEP 1: ", group);
//     getGroupMessages(group)
// });
// };
//
// const getGroupMessages = (group: NotificationTypes) => {
//   // @ts-ignore
//   return group.map((message: NotificationMessage) => {
//     console.log("STEP 2: ", message);
//     return renderSingleNotification(message)
//   })
// };
//
// const renderSingleNotification = ({description, type}: NotificationMessage) => (
//   <NotificationContainer description={description} type={type}/>
// );


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
    <>{
        Object.keys(notifications).map((messagesGroupLabel: string) => (
          // @ts-ignore
          notifications[messagesGroupLabel].map((msg) => (
            enqueueSnackbar(msg.description, {
              variant: msg.type,
              persist: false,
              onClose: () => clearNotification(msg.id, msg.type)})
            )
          )
        ))
      }
    </>
  )
};

export default NotificationRedux;
