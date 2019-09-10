import React from 'react';

const TransactionListFilter = (props: any) => {
  const styleInput = {
    border: '1px solid #eee',
    padding: '10px',
    margin: '0px 10px'
  };

  const styleLabel = {
    display: 'inline-block',
    color: '#777'
  };

  return (
    <label style={styleLabel} htmlFor={props.name}>
      {props.name}
      <input
        style={styleInput}
        type="text"
        name={props.id}
        onChange={e => props.onInputChange(e.target.value, e.target.name)}
      />
    </label>
  );
};

export default TransactionListFilter;
