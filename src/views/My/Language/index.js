import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { I18n } from '../../../components/language/I18n';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>中文{I18n.t('my')}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>英文</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
