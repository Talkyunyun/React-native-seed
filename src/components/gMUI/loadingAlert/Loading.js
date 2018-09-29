/**
 * 加载弹窗组件
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2018/09/29
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import React, {Component} from 'react';
import {
    Text, View, StyleSheet, Image, Dimensions, ActivityIndicator
} from 'react-native';
let winHeight = Dimensions.get('window').height;
let winWidth = Dimensions.get('window').width;

export default class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShow : false,
            text: '加载中...'
        };
    }


    hideLoading() {
        this.setState({
            isShow: false
        });
    }

    showLoading(text = '加载中...') {
        this.setState({
            isShow : true,
            text: text
        });
    }

    render() {
        if (this.state.isShow) {
            return (
                <View style={styles.container}>
                    <View style={styles.loadBox}>
                        <ActivityIndicator
                            style={styles.loadingIcon}
                            color={'#fff'}
                            animating={true}
                            size="large"/>
                        <View class={styles.loadTextBox}>
                            <Text style={styles.loadText}>{this.state.text}</Text>
                        </View>
                    </View>
                </View>
            );
        } else {
            return false;
        }
    }
}


let styles = StyleSheet.create({
    container: {
        width: winWidth,
        height: winHeight,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: 999999,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadBox: {
        width: 120,
        height: 120,
        backgroundColor: 'rgba(0,0,0,.6)',
        borderRadius: 6,
        alignItems: 'center',
    },
    loadingIcon: {
        width: 60,
        height: 60,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20
    },
    loadTextBox: {
        marginTop: 5
    },
    loadText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5
    }
});

