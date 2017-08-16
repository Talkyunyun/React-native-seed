/**
 * 首页
 * @author: Gene
 */

import React  from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
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

        this.state = {
            banners: [
                {id: 1, url:  require('../../image/banner/1.png')},
                {id: 2, url:  require('../../image/banner/2.jpeg')},
                {id: 3, url:  require('../../image/banner/3.png')},
                {id: 4, url:  require('../../image/banner/4.jpeg')}
            ]
        };
    }

    onSwiperEvent(id) {
        alert(id)
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

                {/*幻灯片盒子*/}
                <View style={styles.swiperBox}>
                    <Swiper>
                        {this.state.banners.map((item) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={styles.swiperContentBox}
                                    onPress={this.onSwiperEvent.bind(this, item.id)}
                                >
                                    <Image style={styles.swiperImg} source={item.url}/>
                                </TouchableOpacity>
                            );
                        })}
                    </Swiper>
                </View>


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

                <Button
                    onPress={() => navigate('Picker')}
                    title='Picker页面'
                />
            </View>
        );
    }
}


let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    swiperBox: {
        height:140
    },
    swiperContentBox:{
        flex:1
    },
    swiperImg: {
        width: '100%',
        height:'100%'
    }
});