import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  Scene,
  Router,
  Tabs,
  Modal,
  Stack,
  Reducer,
} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import MyHomework from './views/Student/MyHomework';
import ExamRecords from './views/Student/ExamRecords';
import HomeworkRecords from './views/Student/HomeworkRecords';
import WrongNotes from './views/Student/WrongNotes';
import Login from './views/Account/Login';
import Homework from './views/Teacher/Homework';
import TabBarIcon from './components/TabBarIcon';
import Welcome from './views/Welcome';
import Theme from './views/My/Theme';
import Demo from './views/Demo';
// import SvgUri from './components/Svg';
import homework from './public/img/homework.png';
import styles from './router.scss';

const RouteMap = (props) => {
  const {
    theme: {
      brand_primary,
      brand_primary_similar,
    },
  } = props;
  return (
    <Router
      {...props}
      createReducer={params => (state, action) => {
        props.dispatch(action);
        return Reducer(params)(state, action);
      }}
    >
      <Modal
        hideNavBar
        key="modal"
      >
        <Stack key="welcome" initial>
          <Scene title="欢迎页面" hideNavBar key="welcome" component={Welcome} />
        </Stack>
        <Stack title="登陆" key="account">
          <Scene key="login" hideNavBar component={Login} />
        </Stack>
        <Stack key="student" hideNavBar>
          <Tabs
            key="student-tabs"
            activeBackgroundColor={brand_primary_similar} // 选中tabbar的背景色
            inactiveBackgroundColor={brand_primary} // 未选中tabbar的背景色
            // activeTintColor="#4ECBFC" // 选中tabbar图标的颜色
            // inactiveTintColor="#aaa" // 未选中tabbar图标的颜色
            // tabStyle={{ height: 20 }}
            tabBarPosition="bottom"
            tabBarStyle={styles.tabBarStyle}
            lazy
            wrap
            swipeEnabled
            showLabel={false} // 显示文字
            headerMode="screen" // 页面切换方式
            icon={TabBarIcon}
          >
            <Stack
              title="微信"
              key="myHomework1"
              image={homework}
              selectedImage="bofang"
              hideNavBar
            >
              <Scene key="myHomework" component={MyHomework} />
            </Stack>
            <Stack
              title="通讯录"
              key="examRecords"
              // image={<SvgUri height="40" width="40" source="examBook" />}
              selectedImage="bofang"
              image={homework}
              titleStyle={styles.examRecords_titleStyle}
              navigationBarStyle={styles.examRecords_navigationBarStyle}
            >
              <Scene
                key="myHomework"
                component={ExamRecords}
                title="选择日期范围"
              />
            </Stack>
            <Stack title="发现" key="homeworkRecords1">
              <Scene key="homeworkRecords" component={HomeworkRecords} />
            </Stack>
            <Stack title="我" key="wrongNotes1">
              <Scene key="wrongNotes" component={WrongNotes} />
            </Stack>
          </Tabs>
        </Stack>
        <Stack key="teacher">
          <Tabs key="teacher-tabs">
            <Scene title="作业" key="homework" component={Homework} />
          </Tabs>
        </Stack>
        <Scene key="theme" title="主题" component={Theme} />
        <Stack key="demo">
          <Scene
            // title="demo"
            renderTitle={(
              <View style={styles.demo_renderTitle_titleBox}>
                <Text style={styles.demo_renderTitle_title}>自定义标题</Text>
              </View>
            )}
            key="demo"
            component={Demo}
            renderLeftButton={(
              <View style={styles.demo_renderLeftButton_box}>
                <Text style={styles.demo_renderLeftButton_text}>111</Text>
              </View>
            )}
            leftTitle="回退"
            rightTitle="前进"
            onLeft={() => console.log('onLeft')}
            onRight={() => console.log('onRight')}
            titleStyle={{ color: 'white' }}
            // back // 显示返回按钮
            backTitle="后退标题"
            navBarButtonColor="#fff" // 设置返回按颜色
            navigationBarStyle={styles.demo_navigationBarStyle}
          />
        </Stack>
      </Modal>
    </Router>
  );
};

RouteMap.defaultProps = {

};

RouteMap.propTypes = {
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    brand_primary: PropTypes.string,
    brand_primary_similar: PropTypes.string,
  }).isRequired,
};

export default RouteMap;
