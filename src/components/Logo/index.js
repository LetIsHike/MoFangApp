import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  connect,
} from 'react-redux';
import {
  bindActionCreators,
} from 'redux';
import PropTypes from 'prop-types';
import {
  test,
} from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

@connect(
  state => state,
  dispatch => ({
    doTest: bindActionCreators(test, dispatch),
  }),
)
class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      doTest,
    } = this.props;
    console.log(42, doTest);
    doTest();
    return (
      <View style={styles.container}>
        <Text>
          采集科技
        </Text>
        <Button title="go to Login" onPress={() => Actions.account()} />
        <Button title="go to wrongNotes" onPress={() => Actions.wrongNotes()} />
      </View>
    );
  }
}

Logo.propTypes = {
  doTest: PropTypes.func,
};

Logo.defaultProps = {
  doTest: () => {},
};
export default Logo;
