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

import Header from '../components/header/Header';

export default class TestHeader extends React.Component {
    static navigationOptions = {
        headerTitle : null
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    name="很多很多和"
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});