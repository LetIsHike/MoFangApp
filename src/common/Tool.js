/**
 * 封装常用的属性方法，比如说判断是否登录，或者其他的方法，在这个方法中，提供了用来做安卓，iOS换算px的方法，使用方法：width:px2dp(100)
 */

import {
    AsyncStorage,
    Platform
} from 'react-native';

export default {
    async isLogin(){
        let data = await AsyncStorage.getItem('TOKEN');
        // console.log(data);
        if (data === null){
            console.log('false');
            global.TOKEN = false;
            return false;
        }else {
            console.log('true');
            global.TOKEN = true;
            return true;
        }

    }
}

// 设计图上的比例，宽度
let basePx = Platform.OS === 'ios' ? 750 : 720;

exports.px2dp = function px2dp(px: number): number {
    return px / basePx * SCREEN_WIDTH;
};