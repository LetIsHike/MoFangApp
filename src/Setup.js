import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  StatusBar,
} from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import Theme from './config/theme';
import Language from './config/language';
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
    this.theme = new Theme();
    this.language = new Language();
  }

  async componentDidMount() {
    await this.initialTheme();
    await this.initialLanguage();
    SplashScreen.hide();
  }

  initialTheme = () => {
    const { doChangeTheme } = this.props;
    // 读取缓存中的主题，并保存在store
    return this.theme.getTheme().then((res) => {
      doChangeTheme(res);
    });
  }

  initialLanguage = () => {
    console.log(41);
    return this.language().then((res) => {
      console.log(43, res);
    });
  }

  render() {
    const {
      children,
      theme: {
        brand_primary,
      },
    } = this.props;
    return (
      <Fragment>
        <StatusBar
          backgroundColor={brand_primary}
          animated
        />
        {children}
      </Fragment>
    );
  }
}

Setup.defaultProps = {
  doChangeTheme: () => {},
  theme: {
    brand_primary: 'transparent',
  },
};

Setup.propTypes = {
  doChangeTheme: PropTypes.func,
  theme: PropTypes.object,
  children: PropTypes.element.isRequired,
};
