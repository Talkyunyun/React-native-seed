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
    View, Text, Image, StyleSheet, StatusBar, TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GlobalStyle } from '../../../config/index';

class Header extends Component {
    static defaultProps = {
        rightText: {},
        rightClick: () => {
        },
        right: {},
    };

    _renderLeftEvent() {
        let {leftOnPress} = this.props;
        if (typeof leftOnPress === 'undefined') {
            Actions.pop();
        } else {
            leftOnPress();
        }
    }

    // 左边组件
    _renderLeft() {
        let {leftComponent} = this.props;
        if (leftComponent === false) {
            return false;
        }

        return (
            <TouchableOpacity
                style={styles.backBtnBox}
                onPress={this._renderLeftEvent.bind(this)}>
                <Icon name="angle-left" size={30} style={{color: '#fff'}}/>
            </TouchableOpacity>
        );
    }

    // 中间组件
    _renderCenter() {
        let {centerComponent, isLoading} = this.props;
        if (typeof centerComponent === 'string') {
            let isLoadingComponent = false;
            // if (isLoading) {
            //     isLoadingComponent = <Image style={styles.centerLoading}
            //                                 source={require('../../assets/images/loading/header-loading.gif')}/>;
            // }

            return (
                <View style={styles.centerTextBox}>
                    {isLoadingComponent}
                    <Text numberOfLines={1} style={styles.centerText}>{centerComponent}</Text>
                </View>
            );
        }

        return centerComponent;
    }

    // 右边组件
    _renderRight() {
        let {rightComponent} = this.props;
        if (typeof rightComponent === 'string') {
            return (<Text numberOfLines={1}
                          style={[styles.rightComponentText, this.props.rightText]}
                          onPress={this.props.rightClick}>{rightComponent}</Text>);
        }

        return rightComponent;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'}/>

                <View style={styles.headerBox}>
                    <View style={[styles.headerItem, styles.leftHeader]}>{this._renderLeft()}</View>
                    <View style={[styles.headerItem, styles.centerHeader]}>{this._renderCenter()}</View>
                    <View style={[styles.headerItem, styles.rightHeader, this.props.right]}>{this._renderRight()}</View>
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
        maxWidth: '50%',
        // overflow: 'hidden'
    },
    rightHeader: {
        width: 60,
        alignItems: 'flex-end'
    },
    rightComponentText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8
    },
    backBtnBox: {},

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
});


exports.Header = Header;