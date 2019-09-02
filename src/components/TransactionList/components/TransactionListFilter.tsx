import React from 'react';

const TransactionListFilter = (props: any) => 
    <label htmlFor={props.name}>{props.name} 
            <input
                type="text"
                name={props.name}
                onChange={e => props.onInputChange(e.target.value, e.target.name)}
            />
    </label>




export default TransactionListFilter;