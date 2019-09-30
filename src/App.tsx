import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useMappedState } from 'redux-react-hook';
import Routes from './router/routes';
import * as BlokchainActions from './store/actions/tezos/blokchain';
import * as EthereumActions from './store/actions/ethereum/transactions';
import './App.css';
import Loader from './components/loader/Loader';
import { getBlockchainByDatasource } from './store/reducers/dataSource';
import { State } from './types';

const fetchMoreIntervalSeconds = 10;

const mapState = (state: State) => ({
  blokchain: getBlockchainByDatasource(state, state.dataSource),
  loader: state.loader > 0
});

const App = (): React.ReactElement => {
  const { blokchain, loader } = useMappedState(mapState);
  const dispatch = useDispatch();
  const dep = 0;
  useEffect((): void => {
    // Fetch initial blockchain e.g. 50k
    if (blokchain.length) return;

    const fetchTransactions = (): void => {
      dispatch({
        type: BlokchainActions.BLOKCHAIN_FETCH_TRANSACTIONS
      });
    };

    // Fetch more transactions every specified amount of time
    const fetchMoreTransactions = (): void => {
      dispatch({
        type: BlokchainActions.BLOKCHAIN_FETCH_MORE_TRANSACTIONS
      });
    };

    const fetchEthereumTransactions = (): void => {
      dispatch({
        type: EthereumActions.ETHEREUM_FETCH_TRANSACTIONS
      });
    };

    fetchTransactions();
    fetchEthereumTransactions();
    // setInterval(fetchMoreTransactions, 1000 * fetchMoreIntervalSeconds);
  }, [dep]);

  return (
    <div className="App">
      <Router>
        <Routes />
        {loader ? <Loader /> : null}
      </Router>
    </div>
  );
};

export default App;
