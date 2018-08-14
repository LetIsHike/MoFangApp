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
import { InitialConfog } from './actions/config';

@connect(
  state => ({
    theme: state.config.theme,
    language: state.config.language,
  }),
  dispatch => ({
    doInitialConfog: bindActionCreators(InitialConfog, dispatch),
  }),
)
export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.theme = new Theme();
    this.language = new Language();
  }

  async componentDidMount() {
    await this.initialConfig();
    SplashScreen.hide();
  }

  initialConfig = () => {
    const { doInitialConfog } = this.props;
    return (
      Promise.all([
        this.initialTheme(),
        this.initialLanguage(),
      ])
        .then((arr) => {
          const [theme, language] = arr;
          doInitialConfog({ theme, language });
        })
        .catch(e => console.log('初始化配置失败：', e))
    );
  }

  initialTheme = () => this.theme.getTheme().then(res => res)

  initialLanguage = () => this.language.getLanguage().then(res => res)

  render() {
    const {
      children,
      theme: {
        brandPrimary,
      },
    } = this.props;
    return (
      <Fragment>
        <StatusBar
          backgroundColor={brandPrimary}
          animated
        />
        {children}
      </Fragment>
    );
  }
}

Setup.defaultProps = {
  doInitialConfog: () => {},
  theme: {
    brandPrimary: 'transparent',
  },
};

Setup.propTypes = {
  doInitialConfog: PropTypes.func,
  theme: PropTypes.object,
  children: PropTypes.element.isRequired,
};
