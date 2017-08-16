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

import StorageTest from './StorageTest';

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
                {/*<TestHeader />*/}

                <StorageTest />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});