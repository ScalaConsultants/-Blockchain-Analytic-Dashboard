import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import BlockchainSwitch from "../BlockchainSwitch/BlockchainSwitch";
import { MenuItemsType } from "../../types";
import { menuItems } from "../../constant";

import "./style.css";

const ButtonAppBar = (props: any): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuList: MenuItemsType[] = menuItems;

  const goTo = (route: string): void => {
    handleClose();
    props.history.push(route);
  };

  // const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
  //   console.log(event)
  //   // setAnchorEl(event.currentTarget);
  // };
  const handleClick = (event: any): void => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };



  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="MenuAppBar">
      <Toolbar>
        <IconButton
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          color="inherit"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <div className="MenuSpace"></div>
        <Button color="inherit" onClick={() => goTo("/")}>
          Tezos Data Analytics Dashboard v0.01
        </Button>
        <div style={{marginLeft: "1rem"}}>
          <BlockchainSwitch />
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuList.map((item: MenuItemsType, key: number | string) => {
            return (
              <MenuItem onClick={() => goTo(item.route)} key={key}>
                {item.name}
              </MenuItem>
            );
          })}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(ButtonAppBar);
