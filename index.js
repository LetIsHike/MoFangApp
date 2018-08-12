import { AppRegistry, YellowBox } from 'react-native';
import './src/utils/global';
import App from './App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader',
//   'Warning: BackAndroid is deprecated.  Please use BackHandler instead.',
//   'source.uri should not be an empty string', 'Remote debugger is in a background tab which',
//   'Setting a timer',
//   'Encountered two children with the same key,',
//   'Attempt to read an array index',
]);

// console.disableYellowBox = true; // 关闭全部黄色警告

AppRegistry.registerComponent('RNDemo', () => App);
