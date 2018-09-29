/**
 * 头部组件
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2018/09/29
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import React, { Component } from 'react';
import {
    View, Text, StyleSheet, StatusBar, TouchableOpacity, ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GlobalStyle } from '../../../config/index';

class Header extends Component {

    /** 处理左边菜单点击事件 */
    _onLeftEvent() {
        let { leftOnPress } = this.props;
        if (Object.prototype.toString.call(leftOnPress) === '[object Undefined]') {
            Actions.pop();
        } else {
            leftOnPress();
        }
    }

    /** 处理右边菜单点击事件 */
    _onRightEvent() {
        let { rightOnPress } = this.props;
        if (Object.prototype.toString.call(rightOnPress) === '[object Undefined]') {
            return false;
        } else {
            rightOnPress();
        }
    }

    /** 左边组件 */
    _renderLeft() {
        let {leftComponent, leftStyle} = this.props;
        let type = Object.prototype.toString.call(leftComponent);
        if (leftComponent === false) {
            return false;
        } else if (type === '[object String]') {
            return (
                <TouchableOpacity
                    style={styles.backBtnBox}
                    onPress={this._onLeftEvent.bind(this)}>
                    <Text numberOfLines={1} style={leftStyle || styles.leftTextDefaultStyle}>{leftComponent}</Text>
                </TouchableOpacity>
            );
        } else if (type === '[object Object]') {
            return leftComponent;
        }

        return (
            <TouchableOpacity
                style={styles.backBtnBox}
                onPress={this._onLeftEvent.bind(this)}>
                <Icon name="angle-left" size={30} style={{color: '#fff', marginLeft:8}}/>
            </TouchableOpacity>
        );
    }

    /** 右边组件 */
    _renderRight() {
        let {rightComponent, rightStyle} = this.props;
        let type = Object.prototype.toString.call(rightComponent);
        if (type === '[object Object]') {
            return rightComponent;
        } else if (type === '[object String]') {
            return (
                <TouchableOpacity
                    style={styles.rightBtnBox}
                    onPress={this._onRightEvent.bind(this)}>
                    <Text numberOfLines={1} style={rightStyle || styles.rightTextDefaultStyle}>{rightComponent}</Text>
                </TouchableOpacity>
            );
        }

        return false;
    }

    /** 中间组件 */
    _renderCenter() {
        let {centerComponent, isLoading} = this.props;
        let type = Object.prototype.toString.call(centerComponent);
        if (type === '[object Object]') {
            return centerComponent;
        } else if (type === '[object String]') {
            let isLoadingComponent = false;
            if (isLoading) {
                isLoadingComponent = <ActivityIndicator
                    color={'#fff'}
                    animating={true}
                />;
            }

            return (
                <View style={styles.centerTextBox}>
                    {isLoadingComponent}
                    <Text numberOfLines={1} style={styles.centerText}>{centerComponent}</Text>
                </View>
            );
        }

        return false;
    }

    render() {
        return (
            <View style={styles.container}>
                {/* 设置头部状态栏字体颜色 */}
                <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'}/>

                <View style={styles.headerBox}>
                    <View style={[styles.headerItem, styles.leftHeader]}>{this._renderLeft()}</View>
                    <View style={[styles.headerItem, styles.centerHeader]}>{this._renderCenter()}</View>
                    <View style={[styles.headerItem, styles.rightHeader]}>{this._renderRight()}</View>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyle.themeColor,
        paddingTop: 25
    },
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50
    },
    headerItem: {
        height: '100%',
        justifyContent: 'center'
    },
    leftHeader: {
        width: 60,
        alignItems: 'flex-start'
    },
    centerHeader: {
        justifyContent: 'center',
        maxWidth: '50%'
    },
    rightHeader: {
        width: 60
    },
    rightComponentText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    backBtnBox: {
        flex:1,
        width:'100%',
        justifyContent: 'center'
    },

    // 中部文字
    centerTextBox: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    centerLoading: {
        width: 15,
        height: 15,
        marginTop: 5
    },
    centerText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    leftTextDefaultStyle: {
        color: '#fff',
        fontSize:16,
        marginLeft:8
    },
    rightTextDefaultStyle: {
        color: '#fff',
        fontSize:16,
        marginRight:8
    },
    rightBtnBox: {
        width:'100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
});


exports.Header = Header;