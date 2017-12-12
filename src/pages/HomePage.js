/**
 * Created by gene on 2017/12/4.
 */


import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {User} from '../Utils';

export default class HomePage extends Component {


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // User.saveToken('token_ksdjfksdjfkd');
    }


    shouldComponentUpdate(nextProps, nextState) {

    }


    _handChange() {
        User.isLogin((res) => {
            if (res == true) {
                Actions.myPage();
            } else {
                Actions.loginPage();
            }
        });
    }

    _logout() {
        User.removeToken();

        Actions.loginPage();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>我是首页</Text>

                <Button onPress={this._handChange.bind(this)} title="个人中心" />

                <Button onPress={this._logout.bind(this)} title={'退出登录'} />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
});