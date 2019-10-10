import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useMappedState } from 'redux-react-hook';

import Routes from './router/routes';
import './App.css';
import Loader from './components/loader/Loader';
import { State } from './types';

const mapState = (state: State) => ({
  loader: state.loader > 0
});

const App = (): React.ReactElement => {
  const { loader } = useMappedState(mapState);

  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
