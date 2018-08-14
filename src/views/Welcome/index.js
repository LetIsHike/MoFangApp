import React from 'react';
import { token } from '../../constants/stroage';

class Welcome extends React.Component {
  componentWillMount() {
    this.getToken();
  }

  getToken = () => {
    storage.Load({
      key: token,
    }).then((ret) => {
      const tokenData = ret.token;
      const {
        userinfo,
      } = ret;
      if (tokenData) {
        const {
          currentSchoolRole,
        } = JSON.parse(userinfo);
        switch (currentSchoolRole) {
          case 'STUDENT':
            Actions.TabsStack();
            break;
          case 'TEACHER':
            Actions.teacher();
            break;
          default:
            console.log('当前帐号不属于学生或教师', currentSchoolRole);
        }
      }
    }).catch(() => {
      Actions.TabsStack();
    });
  }


  render() {
    return null;
  }
}

export default Welcome;
