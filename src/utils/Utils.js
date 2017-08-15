
import Alert from 'react-native';

export default Utils = {
    /**
     * 删除数组中指定元素
     * @author: Gene
     * @param arr
     * @param val
     */
    removeArrByVal : function(arr, val) {
        for (var i=0; i < arr.length; i++) {
            if (arr[i] == val) {
                arr.splice(i, 1);
                break;
            }
        }
    },


    /**
     * 普通消息提示组件
     * @author: Gene
     * @param msg
     * @param callback
     * @param btnText
     * @param title
     */
    showMsg(msg, callback, btnText, title) {
        let btn = [{
            text : '我知道了',
            onPress: function() {
                callback(false);
            }
        }];

        if (typeof btnText != 'undefined') {
            btn = [
                {text: '取消', onPress: function() {
                    callback(false);
                }},
                {text: btnText, onPress: function() {
                    callback(true);
                }}
            ];
        }

        if (typeof title == 'undefined') {
            title = '温馨提示';
        }

        Alert.alert(title, msg, btn);
    },



    /**
     * 网络请求
     * @author: Gene
     * @param api
     * @param params
     * @param callback
     */
    request: function(api, params, callback) {
        try {
            let bodys = '';
            if (typeof params == 'object') {
                for (var i in params) {
                    bodys += '&' + i + '=' + params[i];
                }

                if (bodys.length > 0) {
                    bodys = bodys.substr(1);
                }
            }

            fetch(api.url, {
                method : api.method,
                mode : 'no-cors',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body : bodys
            }).then(function(res) {
                callback(res);
            }).catch(function(err) {
                // console.log('网络请求错误', err);
                callback(false);
            });
        } catch (e) {
            callback(false);
        }
    }
};