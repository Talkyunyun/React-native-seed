/**
 * Created by gene on 2017/11/30.
 */
import { Alert } from 'react-native';


/**
 * 普通消息提示组件，默认导出
 * @param msg
 */
export function show(msg, callback, btnText, title) {
    let btn = [{
        text: '我知道了',
        onPress: function() {
            callback(false);
        }
    }];

    if (typeof btnText != 'undefined') {
        btn = [
            {text: '取消', onPress: function() { callback(false); }},
            {text: btnText, onPress:function() { callback(true); }}
        ];
    }

    if (typeof title == 'undefined') {
        title = '温馨提示';
    }

    Alert.alert(title, msg, btn);
};

