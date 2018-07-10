import React, { Component } from 'react';
// import {
//   Actions,
// } from 'react-native-router-flux';
import {
  Button,
  Text,
  View,
} from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CIcon from '../../../components/Icon';
import Resolution from '../../../components/FontSize';
import styles from './styles.scss';

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
            <CIcon name="bofang" size={25} />
          </Button>
          <Text>
            <Icon name="ios-settings" size={45} color="red" />
          </Text>
          {/* <Text>
            <FontAwesome name="search" size={30} />
          </Text> */}
        </View>
        {/* <View>
          {
            iconItems.map(item => (
              <Text key={item} style={[styles.icon, { backgroundColor: '#000' }]}>
                {item.formatCode}
              </Text>
            ))
          }
        </View> */}

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
