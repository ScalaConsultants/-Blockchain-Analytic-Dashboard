import React, { useState, MouseEvent } from "react";

import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import BlockchainSwitch from "../BlockchainSwitch/BlockchainSwitch";
import { MenuItemType } from "../../types";
import { menuItems } from "../../constant";

import './style.css';

const ButtonAppBar = (props: any): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const goTo = (route: string): void => {
    handleClose();
    props.history.push(route);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static" className="MenuAppBar">
      <Toolbar>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          color="inherit"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <div className="MenuSpace" />
        <Button color="secondary" onClick={() => goTo('/')}>
          Tezos Data Analytics Dashboard v0.01
        </Button>
        <div style={{ marginLeft: '1rem' }}>
          <BlockchainSwitch />
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuItems.map((item: MenuItemType, key: number | string) => {
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
