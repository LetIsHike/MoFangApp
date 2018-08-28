import React, { Component, Fragment } from 'react';
import {
  Button,
  Text,
  View,
  List,
  InputItem,
  Toast,
} from 'antd-mobile-rn';
import { token } from '../../../constants/stroage';
import { loginError, loginSuccess } from '../../../constants/fetch';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: '',
    };
  }

  savaToken = (res) => {
    const tokenData = res.token;
    const {
      userInfo,
    } = res;
    return storage.save({
      key: token,
      data: {
        token: tokenData,
        userinfo: JSON.stringify(userInfo),
      },
      expires: null,
    });
  }

  login = () => {
    const {
      username,
      password,
    } = this.state;
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    Fetch.post('/user/login', formData, false, 'file', {
      'Content-Type': 'multipart/form-data',
    })
      .then((res) => {
        console.log(47, res);
        const err = res.indexOf(loginError);
        const succ = res.indexOf(loginSuccess);

        if (err !== -1) {
          Toast.info('账号名或密码错误');
          return;
        }
        if (succ !== -1) {
          Toast.info('登陆成功', 1);
          setTimeout(() => {
            Actions.Home();
          }, 1000);
          return;
        }
        Toast.fail('未知错误');
      });
  }

  clearToken = () => {
    storage.remove({
      key: token,
    });
  }

  render() {
    return (
      <Fragment>
        <View>
          <List>
            <List.Item>
              <Text>
                登陆
              </Text>
            </List.Item>
            <InputItem
              placeholder="请输入账号"
              onChange={(value) => {
                this.setState({
                  username: value,
                });
              }}
            >
            账号：
            </InputItem>
            <InputItem
              placeholder="请输入密码"
              onChange={(value) => {
                this.setState({
                  password: value,
                });
              }}
            >
            密码：
            </InputItem>
            <List.Item>
              <Button
                onClick={this.login}
                type="primary"
              >
              登陆
              </Button>
            </List.Item>
          </List>
        </View>
      </Fragment>
    );
  }
}
