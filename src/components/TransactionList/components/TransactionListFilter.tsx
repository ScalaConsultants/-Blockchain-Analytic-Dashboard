import React from 'react';

const TransactionListFilter = (props: any) => 

        <input
            type="text"
            name={props.name}
            onChange={e => props.onInputChange(e.target.value, e.target.name)} />



export default TransactionListFilter;