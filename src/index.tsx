import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/index';
import rootSaga from './store/sagas/root';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
