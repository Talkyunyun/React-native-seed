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

import TestHeader from './TestHeader';

export default class AppTest extends React.Component {
    static navigationOptions = {
        headerTitle : null
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TestHeader />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});