import React, { Component, Fragment } from 'react';
import {
  Provider,
  connect,
} from 'react-redux';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Router from './src/router';
import store from './src/store';
import Theme from './src/config/theme';
// import Resolution from './src/components/Resolution';

const RouterWithRedux = connect(state => ({ color: state.config.color }))(Router);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#48ADA0',
    };
    this.theme = new Theme();
  }

  componentWillMount() {
    this.theme.getTheme().then((res) => {
      this.setState({
        color: res,
      });
    });
    store.subscribe(() => {
      const configColor = store.getState().config.color;
      const { color } = this.state;
      if (configColor !== color) this.setState({ color: configColor });
    });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { color } = this.state;
    return (
      <Provider store={store}>
        {/* <Resolution.FixWidthView> */}
        <Fragment>
          <StatusBar
            backgroundColor={color}
            animated
          />
          <RouterWithRedux />
        </Fragment>
        {/* </Resolution.FixWidthView> */}
      </Provider>
    );
  }
}
