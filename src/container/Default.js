/**
 * 默认容器组件
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene, Overlay } from 'react-native-router-flux';


// 加载组件和消息弹窗组件
import { LoadingAlert, GMessageBar } from '../components/gMUI/index';

import Login from '../page/login/Login';

export default class Default extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Router>
                    <Overlay key={'overlay'}>
                        <Scene key={'LoadingAlert'} component={LoadingAlert.Component} title={'弹窗加载组件'} />


                        <Scene key={'root'}>
                            <Scene hideNavBar={true} key={'login'} component={Login} title={'登录组件'} />
                        </Scene>


                        <Scene key={'MessageBar'} component={GMessageBar.Component} title={'顶部消息错误提示组件'} />
                    </Overlay>
                </Router>
            </View>
        );
    }
}
