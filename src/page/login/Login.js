/**
 * 登录组件
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import styles from './Style';

import { LoadingAlert, Header, GMessageBar } from '../../components/gMUI/index';
export default class Login extends Component {

    componentDidMount() { }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    rightComponent={'卡'}
                    centerComponent={'ddd'} />

                <Text>sdfsdfsdf</Text>


                <Button title={'加载'} onPress={() => {

                    LoadingAlert.Manager.show();
                }} />

                <Button title={'消息提示'} onPress={() => {
                    GMessageBar.Manager.error('ddd');
                }} />
            </View>
        );
    }
}
