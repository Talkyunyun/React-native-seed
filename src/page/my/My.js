/**
 * 个人中心
 * @author: Gene
 */

import React  from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import StyleConfig from '../../config/StyleConfig';

export default class My extends React.Component {
    // 头部信息设置
    static navigationOptions = {
        headerTitle : '我的',
        headerStyle : {
            backgroundColor : StyleConfig.mainColor
        },
        headerTitleStyle : {
            color: '#fff'
        }
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>我是My页面</Text>
            </View>
        );
    }
}


let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});