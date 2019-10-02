import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useMappedState } from 'redux-react-hook';
import Routes from './router/routes';
import * as EthereumActions from './store/actions/ethereum/wallets';
import './App.css';
import Loader from './components/loader/Loader';
import { State } from './types';

const mapState = (state: State) => ({
  loader: state.loader > 0
});

const App = (): React.ReactElement => {
  const { loader } = useMappedState(mapState);
  const dispatch = useDispatch();
  const dep = 0;
  useEffect((): void => {

    const fetchEthereumWallets = (): void => {
      dispatch({
        type: EthereumActions.ETHEREUM_FETCH_WALLETS
      });
    };

    fetchEthereumWallets();
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
