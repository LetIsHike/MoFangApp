import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Config from '../../../config';
import styles from './style';
import ThemeClass from '../../../config/theme';
import { ChangeTheme } from '../../../actions/config';

@connect()
export default class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.theme = new ThemeClass();
  }

  /**
   * 创建主题item
   */
  renderThemeItem = (item) => {
    const currentColor = Config.ThemeFlags[item];
    const { dispatch } = this.props;
    return (
      <TouchableOpacity
        key={item}
        activeOpacity={0.3}
        onPress={
          () => {
            this.theme.saveTheme(currentColor).then((res) => {
              dispatch(ChangeTheme(res));
              Actions.student();
            });
          }
        }
      >
        <View style={[styles.themeItem, { backgroundColor: currentColor }]}>
          <Text style={styles.themeText}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  /**
   * 创建主题列表
   */
  renderThemeList = () => (
    Object.keys(Config.ThemeFlags).map(item => this.renderThemeItem(item))
  )

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.themeList}>
            {this.renderThemeList()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
