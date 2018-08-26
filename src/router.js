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
import Login from './views/Account/Login';
import Home from './views/Home';
import Activity from './views/Activity';
import Itinerary from './views/Itinerary';
import My from './views/My';
import TabBarIcon from './components/TabBarIcon';
import Welcome from './views/Welcome';
import Demo from './views/Demo';
// import SvgUri from './components/Svg';
import homework from './public/img/homework.png';
import styles from './router.scss';

const RouteMap = (props) => {
  const {
    theme: {
      brandPrimary,
      brandPrimarySimilar,
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
        <Stack key="Welcome">
          <Scene title="欢迎页面" hideNavBar key="WelcomeKey" component={Welcome} />
        </Stack>
        <Stack title="登陆" key="Account" initial>
          <Scene key="Login" hideNavBar component={Login} />
        </Stack>
        <Stack key="TabsStack" hideNavBar>
          <Tabs
            key="Tabs"
            activeBackgroundColor={brandPrimarySimilar} // 选中tabbar的背景色
            inactiveBackgroundColor={brandPrimary} // 未选中tabbar的背景色
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
              title="Home"
              key="Home"
              titleStyle={styles.examRecords_titleStyle}
              navigationBarStyle={styles.examRecords_navigationBarStyle}
            >
              <Scene key="HomeKey" component={Home} />
            </Stack>
            <Stack
              title="Activity"
              key="Activity"
              image={homework}
              selectedImage="bofang"
              hideNavBar
            >
              <Scene key="ActivityKey" component={Activity} />
            </Stack>
            <Stack
              title="Itinerary"
              key="Itinerary"
              // image={<SvgUri height="40" width="40" source="examBook" />}
              selectedImage="bofang"
              image={homework}
              hideNavBar
            >
              <Scene key="ItineraryKey" component={Itinerary} title="选择日期范围" />
            </Stack>
            <Stack
              title="My"
              key="My"
              hideNavBar
            >
              <Scene key="MyKey" component={My} />
            </Stack>
          </Tabs>
        </Stack>
        <Stack key="Demo">
          {/* 只要导航栏自定义内容页面就会卡死，比如renderTitle，renderLeftButton */}
          <Scene
            // title="demo"
            // renderTitle={(
            //   <View style={styles.demo_renderTitle_titleBox}>
            //     <Text style={styles.demo_renderTitle_title}>自定义标题</Text>
            //   </View>
            // )}
            key="DemoKey"
            component={Demo}
            // renderLeftButton={(
            //   <View style={styles.demo_renderLeftButton_box}>
            //     <Text style={styles.demo_renderLeftButton_text}>111</Text>
            //   </View>
            // )}
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
    brandPrimary: PropTypes.string,
    brandPrimarySimilar: PropTypes.string,
  }).isRequired,
};

export default RouteMap;
