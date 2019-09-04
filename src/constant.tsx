// import { MenuItemProps } from "./types";
import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EqualizerIcon from '@material-ui/icons/Equalizer';

export const menuItems = [
    { name: 'Home', route: '/', icon: <ExitToAppIcon /> },
    { name: 'Transactions', route: '/transactions', icon: <ExitToAppIcon /> },
    { name: 'Charts', route: '/charts', icon: <ExitToAppIcon /> },
    { name: 'Top seller', route: '/top-seller', icon: <EqualizerIcon /> },
    { name: 'Top buyer', route: '/top-buyer', icon: <EqualizerIcon /> },
    { name: 'Treemap', route: '/treemap', icon: <EqualizerIcon /> },
    { name: 'Custom chart', route: '/top-buyer-with-custom', icon: <EqualizerIcon /> },
];