/**
 * 消息提示组件
 * Created by gene on 2017/12/1.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { MessageBar as MessageBarAlert, MessageBarManager } from 'react-native-message-bar';


class MessageBar extends Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        MessageBarManager.registerMessageBar(this.refs.alert);
    }

    componentWillUnmount() {
        MessageBarManager.unregisterMessageBar();
    }

    render() {
        return (
            <MessageBarAlert ref="alert"/>
        );
    }
}

let obj = new Object();
obj.MessageBar = MessageBar;

obj.success = (msg) => {
    MessageBarManager.showAlert({
        title: '',
        message: msg + "\r\n",
        alertType: 'success'
    });
};


obj.error = (msg) => {
    MessageBarManager.showAlert({
        title: '',
        message: msg + "\r\n",
        alertType: 'error'
    });
};

obj.info = (msg) => {
    MessageBarManager.showAlert({
        title: '',
        message: msg + "\r\n",
        alertType: 'info'
    });
};

obj.warning = (msg) => {
    MessageBarManager.showAlert({
        title: '',
        message: msg + "\r\n",
        alertType: 'warning'
    });
};



module.exports = obj;