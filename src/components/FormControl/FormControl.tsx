import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';

const FormControlField = (props: any) => (
  <FormControl style={{ width: '30%' }}>
    <InputLabel>
      {props.inputLabel}
    </InputLabel>
    <Select
      value={props.value}
      onChange={props.onChange}
    >
      <MenuItem value={props.firstItemValue}>
        {props.firstItemName}
      </MenuItem>
      {props.items()}
    </Select>
  </FormControl>
);

export default FormControlField;
