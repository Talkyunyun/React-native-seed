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

import StorageUtils from '../utils/StorageUtils';

export default class AppTest extends React.Component {
    static navigationOptions = {
        headerTitle : null
    };

    constructor(props) {
        super(props);


    }


    // save方法
    testSave() {
        StorageUtils.save({
            key : 'name',
            data: {
                name : 'gene',
                uid : 123
            },

            expires: 1000 * 3600
        });
    }

    // 获取方法
    testLoad() {
        StorageUtils.load({
            key : 'name'
        }).then( res => {
            console.log(res.name);
        }).catch(err => {
            console.log(err);
        });
    }

    // remove方法
    testRemove() {
        StorageUtils.remove({
            key : 'name'
        });

        // 清除全部
        StorageUtils.clearMap();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>storage测试</Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1
    }
});