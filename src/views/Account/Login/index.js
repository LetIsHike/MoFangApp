import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
// import {
//   Actions,
// } from 'react-native-router-flux';
import {
  Button,
  Text,
  View,
} from 'antd-mobile-rn';
import {
  Icon,
} from 'react-native-vector-icons';
import Resolution from '../../../components/FontSize';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    fontSize: 16,
  },
  fontSize16: {
    fontSize: 16,
  },
  navbar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#30bf6c',
  },
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    storage.save({
      key: 'loginState',
      data: {
        from: 'some other site',
        userid: 'some userid',
        token: 'some token',
      },
      expires: 1000 * 3600,
    });

    // 读取
    storage.load({
      key: 'loginState',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {
          // 各种参数
        },
        someFlag: true,
      },
    }).then((ret) => {
      console.log(ret.userid);
      this.setState({ user: ret });
      const {
        user,
      } = this.state;
      console.log(user);
    }).catch((err) => {
      console.warn(err.message);
    });
  }

  // https://blog.csdn.net/jiecsdn/article/details/60867232
  render() {
    return (
      <Resolution.FixWidthView>
        <View style={styles.navbar}>
          <Button>
            <Icon name="rocket" size={16} color="red" />
          </Button>
          <Text>
            12-23数学作业
          </Text>
          <Text>
            计时00:00 /预估30分钟
          </Text>
        </View>
        {/* <View style={styles.container}>
          <Text>
            登陆
          </Text>
          <Button onClick={() => Actions.student()}>
            go to student
          </Button>
          <Button onClick={() => Actions.teacher()}>
            go to teacher
          </Button>
          <Button>
            设置storage
          </Button>
          <Button>
            获取storage
          </Button>
        </View> */}
      </Resolution.FixWidthView>
    );
  }
}
