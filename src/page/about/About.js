/**
 * 关于我
 * @author: Gene
 */
import React from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import StyleConfig from '../../config/StyleConfig';

export default class About extends React.Component {
    static navigationOptions = {
        headerTitle : '关于我',
        headerStyle : {
            backgroundColor : StyleConfig.mainColor
        },
        headerTitleStyle : {
            color: '#fff'
        },
        headerBackTitleStyle : {
            color: '#fff'
        },
        headerTintColor: '#fff'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>我是About页面</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});