import React from "react";

// Icons
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ListIcon from "@material-ui/icons/List";
import Home from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import TimelineIcon from '@material-ui/icons/Timeline';
import { MenuItemType } from "./types";

export const menuItems: MenuItemType[] = [
    { name: "Home", route: "/", icon: <Home />, description: "Home Page" },
    { name: "Transactions", route: "/transactions", icon: <ListIcon />, description: "List of the last 100 000 transaction" },
    { name: 'Line chart', route: '/line-chart' , icon: <TimelineIcon />, description: "Line Chart"},
    { name: 'Simple Bar Chart Demo', route: '/simple-bar-chart-demo', icon: <AddToPhotosOutlinedIcon />, description: "Demo chart"  },
    { name: 'Stacked Bar Chart Demo', route: '/stacked-bar-chart-demo', icon: <AddToPhotosOutlinedIcon />, description: "Demo chart"  }
];

