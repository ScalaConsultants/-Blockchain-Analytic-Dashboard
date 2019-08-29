import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";

import "./style.css";

const ButtonAppBar = (props: any): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [blockchainName, setBlockchainName] = React.useState("tezos");
  const menuItems = [
    { name: 'Home', route: '/' },
    { name: 'Transactions', route: '/transactions' },
    { name: 'Charts', route: '/charts' },
    { name: 'Top seller', route: '/top-seller' },
    { name: 'Top buyer', route: '/top-buyer' }
  ];

  const goTo = (route: string): void => {
    handleClose();
    props.history.push(route);
  };

  const handleClick = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };
  const handleBlockchainChange = (event: any) => {
    setBlockchainName(event.target.value);
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
          <FormControl style={{ minWidth: "100px"}}>
            <InputLabel style={{ color: "#ffffff" }}>Blockchain</InputLabel>
            <Select
              style={{ color: "#ffffff" }}
              value={blockchainName}
              onChange={(e: any) => {
                e.persist();
                setTimeout(() => handleBlockchainChange(e), 100);
              }}
            >
              <MenuItem value="tezos">Tezos</MenuItem>
              <MenuItem value="ethereum">Ethereum</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {menuItems.map((item, key) => {
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
