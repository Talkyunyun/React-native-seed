/**
 * 弹窗加载中组件
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2018/09/29
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import React, { Component } from 'react';
import Loading from './Loading';
import Manager from './Manager';

class LoadingAlert extends Component {

    componentDidMount() {
        Manager.registerComponent(this.refs.loading);
    }

    componentWillUnmount() {
        Manager.unregisterComponent();
    }

    render() {
        return <Loading ref='loading' />;
    }
}

exports.LoadingAlert = {
    Component: LoadingAlert, Manager
};