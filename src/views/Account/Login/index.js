import React, { Component, Fragment } from 'react';
import md5 from 'md5';
import {
  Button,
  Text,
  View,
  List,
  InputItem,
} from 'antd-mobile-rn';
import { token } from '../../../constants/stroage';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: {},
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
    Fetch.post('/user/login', {
      username,
      password,
    }, false)
      .then((res) => {
        console.log('47:login', res);
        this.setState({
          fetchData: res,
        });
      });
  }

  clearToken = () => {
    storage.remove({
      key: token,
    });
  }

  render() {
    const {
      fetchData,
    } = this.state;
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

            <List.Item>
              <Button
                onClick={this.clearToken}
                type="primary"
              >
                清除token
              </Button>
            </List.Item>
          </List>
        </View>
        <Text>
          {
            JSON.stringify(fetchData)
          }
        </Text>
      </Fragment>
    );
  }
}
