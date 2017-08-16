/**
 * APP 入口文件
 * @author: Gene
 */


import React from 'react';
import {
    Image,
    StyleSheet
} from 'react-native';
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';



// 样式定义
let styles = StyleSheet.create({
    icon: {
        width : 26,
        height: 26
    }
});


// 底部tab页面
import Home from './page/home/Home';
import My from './page/my/My';


// APP tab 全局定义
const AppTab = TabNavigator({
    Home : {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/tabs/home.png')}
                    style={[styles.icon, {tintColor: tintColor}]} />
            )
        }
    },
    My : {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/tabs/my.png')}
                    style={[styles.icon, {tintColor: tintColor}]} />
            )
        }
    }
}, {
    tabBarPosition : 'bottom',
    tabBarOptions : {
        activeTintColor : 'red',
        labelStyle : {
            fontSize: 12
        },
        style : {
            borderTopWidth : 1,
            borderTopColor : '#eeeeee',
            backgroundColor: '#ffffff'
        }
    }
});


// 所有路由页面
import About from './page/about/About';
import Gene from './page/gene/Gene';
import Picker from './page/picker/Picker';


import Test from './test/AppTest';

// 路由配置
export default StackNavigator({
    AppTab : { screen: AppTab },
    About : { screen: About },
    Gene: { screen: Gene },
    Picker: { screen: Picker },

    Test : { screen: Test }
});