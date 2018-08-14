import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Language from '../../My/Language';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class MyHomework extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="go theme" onPress={Actions.theme} />
        <Language />
        <Text>
我的作业
        </Text>
      </View>
    );
  }
}
