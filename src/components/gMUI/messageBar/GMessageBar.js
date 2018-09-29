
/**
 * 顶部消息状态提示组件
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2018/09/29
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import React, { Component } from 'react';
import Manager from './Manager';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';

class GMessageBar extends Component {

    componentDidMount() {
        MessageBarManager.registerMessageBar(this.refs.alert);
    }

    componentWillUnmount() {
        MessageBarManager.unregisterMessageBar();
    }

    render() {
        return <MessageBar viewTopInset={20} ref='alert' />;
    }
}

exports.GMessageBar = {
    Component: GMessageBar, Manager
};
