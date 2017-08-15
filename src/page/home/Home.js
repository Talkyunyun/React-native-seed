/**
 * 首页
 * @author: Gene
 */

import React  from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar
} from 'react-native';
import StyleConfig from '../../config/StyleConfig';

export default class Home extends React.Component {
    // 头部信息设置
    static navigationOptions = {
        headerTitle : '首页',
        headerStyle : {
            backgroundColor : StyleConfig.mainColor
        },
        headerTitleStyle : {
            color: '#fff'
        },
        headerRight : (<Button
            color={'#fff'}
            onPress={() => alert(22)}
            title='...'/>)
    };


    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                />


                <Text>我是Home页面</Text>

                <Button
                    onPress={() => navigate('About', {
                        name : 'Gene'
                    })}
                    title="关于我"
                />

                <Button
                    onPress={() => navigate('Gene')}
                    title='详情页面'
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