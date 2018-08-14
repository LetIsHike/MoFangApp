import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import I18nText from '../../../components/I18nText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Test3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>考试记录</Text>
        <TouchableOpacity onPress={() => {
          setTimeout(Actions.myHomework, 500);
        }}
        >
          <I18nText>jump</I18nText>
        </TouchableOpacity>
      </View>
    );
  }
}
