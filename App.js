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
import { ChangeTheme } from './src/actions/config';
// import Resolution from './src/components/Resolution';

const RouterWithRedux = connect(state => ({ theme: state.config.theme }))(Router);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'transparent',
    };
    this.theme = new Theme();
    console.log('constructor');
  }

  componentWillMount() {
    store.subscribe(() => {
      const { theme } = store.getState().config;
      const { color } = this.state;
      if (theme.brand_primary !== color) this.setState({ color: theme.brand_primary }, () => console.log('监听之后 this.setState'));
    });
    this.theme.getTheme().then((res) => {
      store.dispatch(ChangeTheme(res));
      console.log('获取缓存，发送请求。。。');
      // this.setState({
      //   color: res.brand_primary,
      // });
    });
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const { color } = this.state;
    console.log('render');
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
