import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";

const BlockchainSwitch = (props: any): React.ReactElement => {
  const [blockchainName, setBlockchainName] = React.useState("tezos");

  const handleBlockchainChange = (event: any) => {
    setBlockchainName(event.target.value);
  };

  return (
    <FormControl style={{ minWidth: "100px" }}>
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
  );
};

export default BlockchainSwitch;
