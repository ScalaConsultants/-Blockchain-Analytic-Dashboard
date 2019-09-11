import React from 'react';
import {transactionListFilterInput, transactionListFilterLabel} from './TransactionsList-styles';

const TransactionListFilter = (props: any) => {
  return (
    <label style={transactionListFilterLabel} htmlFor={props.name}>
      {props.name}
      <input
        style={transactionListFilterInput}
        type="text"
        name={props.id}
        onChange={e => props.onInputChange(e.target.value, e.target.name)}
      />
    </label>
  );
};

export default TransactionListFilter;
