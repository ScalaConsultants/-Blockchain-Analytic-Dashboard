import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router/routes';
import './App.css';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
