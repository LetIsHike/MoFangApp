import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Actions } from '../../../node_modules/react-native-router-flux';

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
        <Text>首页</Text>
        <TouchableOpacity
          onPress={Actions.Demo}
        >
          <Text>demo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
