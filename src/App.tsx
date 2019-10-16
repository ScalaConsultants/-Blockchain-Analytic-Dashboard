import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Routes from './router/routes';
import './App.css';
import Notifications from './components/Notification';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
      <Notifications/>
    </div>
  );
};

const IntegrationNotistack = () => (
  <SnackbarProvider
    maxSnack={3}
    preventDuplicate
  >
    <App />
  </SnackbarProvider>

);

export default IntegrationNotistack;
