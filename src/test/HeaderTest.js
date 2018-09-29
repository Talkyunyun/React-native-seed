/**
 * 头部组件测试
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2018/09/29
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

import { Header } from '../components/gMUI/index';

export default class HeaderTest extends Component {

    render() {
        return (
            <View style={styles.container}>


                <Header
                    // 左部组件
                    // leftComponent={'ddd'}
                    // leftStyle={{color:'red',marginLeft:10}}
                    // leftOnPress={() => {
                    //     alert(22)
                    // }}

                    // 中间组件
                    // centerComponent={'开始打飞机康师傅开始打飞机开始放假开始打飞机盛开的房价开始'}
                    // isLoading={true}

                    // 右部组件
                    // rightComponent={'ddd'}
                    // rightStyle={{color: '#000'}}
                    // rightOnPress={() => {
                    //     alert(33)
                    // }}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});