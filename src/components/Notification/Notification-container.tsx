import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { NotificationMessage, NotificationTypes } from "./types";
import NotificationView  from './Notification-view';

// const test123 = (notifications: NotificationTypes) => {
//   return Object.keys(notifications).map((messagesGroupLabel: string) => {
//     // @ts-ignore
//     const group = notifications[messagesGroupLabel];
//
//     return (<div>{
//       group.map((message: NotificationMessage) => {
//         return (
//           <NotificationView key={message.description} description={message.description} type={message.type}/>
//         )
//       })
//     }</div>)
//     // console.log("RESULT 123")
//   });
//   // console.log("RESULT", result)
// };


const NotificationContainer = (props: NotificationTypes) =>  {
  // console.log("CO TO ZA NOTYFIKACJE 123", props);
  // console.log("CO TO ZA NOTYFIKACJE 456", test123(props));
  // return (
  //   <div>
  //     {Object.keys(props).map((messagesGroupLabel: string) => (
  //       <>
  //         <div>{
  //           // @ts-ignore
  //           // JSON.stringify(props[messagesGroupLabel])
  //           props[messagesGroupLabel].map((msg) => (
  //             <NotificationView description={msg.description}/>
  //           ))
  //         }</div>
  //       </>
  //     ))}
  //   </div>
  // );
};

export default NotificationContainer;
