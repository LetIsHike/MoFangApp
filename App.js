import React, { Component } from 'react';
import {
  Provider,
} from 'react-redux';
import Router from './src';
import store from './src/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
