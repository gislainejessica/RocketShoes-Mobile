import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import store from './store';
//import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
   <Provider store={store}>
      <StatusBar barStyle='light-content' />
      <Routes />
    </Provider>
  );
}

export default App;

/**   <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} /> */
