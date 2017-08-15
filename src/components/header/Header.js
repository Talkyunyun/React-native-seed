/**
 * 头部组件
 * @author: Gene
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import StyleConfig from '../../config/StyleConfig';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    // 左边组件
    _renderLeft() {
        let leftView = this.props.leftView;
        // 传入false则不显示
        if (leftView == false) return null;


        // this.props.navigation.goBack();
        let { navigate } = this.props.navigation;
        return (
            <TouchableOpacity
                style={styles.leftBox}
                onPress={navigate.goBack()}
            >
                <Image
                    style={styles.leftBtn}
                    source={require('../../image/header/break.png')}
                />
            </TouchableOpacity>
        );
    }

    // 右边组件
    _renderRight() {
        return (
            <View style={styles.rightBox}>
                <Text>dddd</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                />

                {this._renderLeft()}

                <View style={styles.nameBox}>
                    <Text style={styles.name}>{this.props.name}</Text>
                </View>

                {this._renderRight()}
            </View>
        );
    }
}

// 样式定义
let styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: StyleConfig.mainColor,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop:20,
    },
    nameBox: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    name: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'bold'
    },
    leftBox: {
        width:50,
        justifyContent:'center',
        alignItems:'center'
    },
    leftBtn: {
        height:18
    },
    rightBox: {
        width:50,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    }
});