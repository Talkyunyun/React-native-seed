/**
 * 登录页面
 * Created by gene on 2017/12/4.
 */


import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

import {connect} from 'react-redux';
import { doLogin } from '../actions/LoginAction';

import { User } from '../Utils';


class LoginPage extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成，且成功登录
        if (nextProps.status === 'done' && nextProps.isSuccess) {
            Actions.homePage({
                age: '我是可点击'
            });
            return false;
        }
        return true;
    }


    _closePage() {
        Actions.pop();
    }

    // 登录事件
    _handLogin() {
        User.saveToken('sdfsdfdsfds');

        Actions.pop();


        // this.props.dispatch(doLogin());
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                {/* 关闭按钮 */}
                <TouchableOpacity
                    onPress={this._closePage.bind(this)}
                    style={styles.closeBox}>
                    <Image style={styles.closeImg} source={require('../images/btn_close.png')} />
                </TouchableOpacity>


                <Text>我是登录页面</Text>

                <Button
                    onPress={this._handLogin.bind(this)}
                    title="登录"/>
            </ScrollView>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    closeBox: {
        width: 30,
        height: 30,
        marginTop: 20,
        marginLeft:10
    },
    closeImg: {
        width:'100%',
        height:'100%'
    }
});

function select(store) {
    return {
        status: store.LoginReducer.status,
        isSuccess: store.LoginReducer.isSuccess,
        user: store.LoginReducer.user
    }
}


export default connect(select)(LoginPage);