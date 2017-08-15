/**
 * Gene页面
 * @author: Gene
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Header from '../../components/header/Header';

export default class Gene extends React.Component {
    // 隐藏header
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    name="我的页面"
                />


                <Text>我是Gene页面</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});