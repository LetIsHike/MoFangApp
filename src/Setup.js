import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  StatusBar,
} from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { equals } from 'ramda';
import Theme from './config/theme';
import { ChangeTheme } from './actions/config';

@connect(
  state => ({ theme: state.config.theme }),
  dispatch => ({
    doChangeTheme: bindActionCreators(ChangeTheme, dispatch),
  }),
)
export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'transparent',
    };
    this.theme = new Theme();
  }

  componentWillMount() {
    this.initialTheme();
  }

  componentWillReceiveProps(nextProps) {
    this.changeTheme(nextProps);
  }

  initialTheme = () => {
    const { doChangeTheme } = this.props;
    // 读取缓存中的主题，并保存在store
    this.theme.getTheme().then((res) => {
      doChangeTheme(res);
    });
  }

  changeTheme = (nextProps) => {
    const { theme } = this.props;
    const newTheme = nextProps.theme;
    // 判断主题是否变化，若变化则重新应用主题
    if (!equals(newTheme, theme)) {
      this.setState({ color: newTheme.brand_primary });
    }
  }

  render() {
    const { color } = this.state;
    const { children } = this.props;
    return (
      <Fragment>
        <StatusBar
          backgroundColor={color}
          animated
        />
        {children}
      </Fragment>
    );
  }
}

Setup.defaultProps = {
  doChangeTheme: () => {},
  theme: {},
};

Setup.propTypes = {
  doChangeTheme: PropTypes.func,
  theme: PropTypes.object,
  children: PropTypes.element.isRequired,
};
