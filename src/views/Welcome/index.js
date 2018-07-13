import React from 'react';

export default class Welcome extends React.Component {
  componentWillMount() {
    storage.load({
      key: 'token',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {
          // 各种参数
        },
        someFlag: true,
      },
    }).then((ret) => {
      if (ret) {
        console.log('获取到了');
        Actions.push('myHomework');
      } else {
        Actions.push('login');
        console.log('没获取到');
      }
    }).catch((err) => {
      console.warn(err.message);
    });
  }

  render() {
    return (
      null
    );
  }
}
