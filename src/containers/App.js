/**
 * 入口容器
 * @author Gene
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {
    Scene,
    Router,
    Modal
} from 'react-native-router-flux';

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import MyPage from '../pages/MyPage';


class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Router>
                    <Modal hideNavBar>
                        <Scene key="root">
                            <Scene key="homePage" component={HomePage} title="首页" />
                            <Scene key="myPage" component={MyPage} title="个人中心" />
                        </Scene>

                        <Scene key="loginPage" component={LoginPage} hideNavBar title="登录" />
                    </Modal>
                </Router>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

function getMapStateToProps(state) {
    return {
        message: state.AppReducer.message
    };
}

export default connect(getMapStateToProps)(App);