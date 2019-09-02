import React from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";

const mapState = (state: any):any => ({
  dataSource: state.dataSource
});

const BlockchainSwitch = (props: any): React.ReactElement => {
  const { dataSource }  = useMappedState(mapState)
  const [blockchainName, setBlockchainName] = React.useState(dataSource);
  const dispatch = useDispatch();

  const handleBlockchainChange = (event: any) => {
    dispatch({
      type: "SET_DATA_SOURCE",
      source: event.target.value
    });
  };

  return (
    <FormControl style={{ minWidth: "100px" }}>
      <InputLabel style={{ color: "#ffffff" }}>Blockchain</InputLabel>
      <Select
        style={{ color: "#ffffff" }}
        value={dataSource}
        onChange={(e: any) => {
          e.persist();
          setTimeout(() => handleBlockchainChange(e), 100);
        }}
        defaultValue = {blockchainName}
      >
        <MenuItem value="tezos">Tezos</MenuItem>
        <MenuItem value="ethereum">Ethereum</MenuItem>
      </Select>
      <div>{dataSource}</div>
    </FormControl>
  );
};

export default BlockchainSwitch;
