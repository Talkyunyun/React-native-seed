/**
 * 顶部消息提示组件
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2018/09/29
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import { MessageBarManager } from 'react-native-message-bar';

module.exports = {

    /**
     * 错误提示
     */
    error: (msg, title = '温馨提示') => {
        MessageBarManager.showAlert({
            title: title,
            message: msg,
            alertType: 'error'
        });
    },

    warning: (msg, title = '温馨提示') => {
        MessageBarManager.showAlert({
            title: title,
            message: msg,
            alertType: 'warning'
        });
    },

    /**
     * 成功提示
     * @param msg
     * @param title
     */
    success: (msg, title = '温馨提示') => {
        MessageBarManager.showAlert({
            title: title,
            message: msg,
            alertType: 'success'
        });
    },


    info: (msg, title = '温馨提示') => {
        MessageBarManager.showAlert({
            title: title,
            message: msg,
            alertType: 'info'
        });
    },

    default: (msg, title = '温馨提示') => {
        MessageBarManager.showAlert({
            title: title,
            message: msg,
            alertType: 'default'
        });
    }
};