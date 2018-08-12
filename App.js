import React, { Component } from 'react';
import {
  Provider,
  connect,
} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/router';
import store from './src/store';
import Setup from './src/Setup';
// import Resolution from './src/components/Resolution';

const RouterWithRedux = connect(state => ({ theme: state.config.theme }))(Router);
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        {/* <Resolution.FixWidthView> */}
        <Setup>
          <RouterWithRedux />
        </Setup>
        {/* </Resolution.FixWidthView> */}
      </Provider>
    );
  }
}
