import React from 'react';
import {
  Provider,
  connect,
} from 'react-redux';
import Router from './src/router';
import store from './src/store';
import Setup from './src/Setup';
// import Resolution from './src/components/Resolution';

const RouterWithRedux = connect(state => ({ theme: state.config.theme }))(Router);

const App = () => (
  <Provider store={store}>
    {/* <Resolution.FixWidthView> */}
    <Setup>
      <RouterWithRedux />
    </Setup>
    {/* </Resolution.FixWidthView> */}
  </Provider>
);
export default App;
