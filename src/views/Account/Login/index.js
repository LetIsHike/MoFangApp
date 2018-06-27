import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

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
        <Text>
          登陆
        </Text>
        <Button title="go to student" onPress={() => Actions.student()} />
        <Button title="go to teacher" onPress={() => Actions.teacher()} />
      </View>
    );
  }
}
