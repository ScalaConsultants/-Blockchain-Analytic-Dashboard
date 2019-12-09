import React from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

import DashboardTableContainer from './DashboardTable-container'
import { currencyOn, currencyOff } from '../../store/actions/common/currencySwitch'
import { Currency, State } from './types';

const DashboardTable = () => {

  const mapState = (state: State): Currency => ({
    currency: state.common.currency
  });

  const { currency } = useMappedState(mapState);

  const dispatch = useDispatch();

  const setCurrencyOn = () => dispatch(currencyOn());
  const setCurrencyOff = () => dispatch(currencyOff());

  const actions = {
    setCurrencyOn,
    setCurrencyOff,
  };

  return <DashboardTableContainer currency={currency} actions={actions}/>;
};

export default DashboardTable;
